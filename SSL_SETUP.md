# 🔒 SSL Certificate Setup Guide

## Option 1: Let's Encrypt (Free SSL)

### Using Certbot (Recommended)
```bash
# Install Certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d neocred.in -d www.neocred.in -d api.neocred.in

# Auto-renewal setup
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

### Manual Certificate Generation
```bash
# Generate certificate
sudo certbot certonly --standalone -d neocred.in -d www.neocred.in -d api.neocred.in

# Certificate files location
# /etc/letsencrypt/live/neocred.in/fullchain.pem
# /etc/letsencrypt/live/neocred.in/privkey.pem
```

## Option 2: Cloudflare SSL (Recommended for CDN)

### Cloudflare Setup
1. **Add domain to Cloudflare**
   - Sign up at cloudflare.com
   - Add neocred.in domain
   - Update nameservers at domain registrar

2. **SSL Configuration**
   - Go to SSL/TLS → Overview
   - Set encryption mode to "Full (strict)"
   - Enable "Always Use HTTPS"

3. **DNS Records**
```
Type    Name    Content             Proxy Status
A       @       YOUR_SERVER_IP      Proxied
A       www     YOUR_SERVER_IP      Proxied
A       api     YOUR_SERVER_IP      Proxied
CNAME   *       neocred.in          Proxied
```

## Option 3: Commercial SSL Certificate

### Purchase from Provider
- **Recommended**: DigiCert, Sectigo, GlobalSign
- **Budget**: Namecheap, GoDaddy SSL

### Installation Steps
```bash
# Generate CSR
openssl req -new -newkey rsa-2048 -nodes -keyout neocred.in.key -out neocred.in.csr

# After receiving certificate from provider
# Install on web server (Nginx/Apache)
```

## Nginx SSL Configuration

### /etc/nginx/sites-available/neocred.in
```nginx
server {
    listen 80;
    server_name neocred.in www.neocred.in;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name neocred.in www.neocred.in;
    
    ssl_certificate /etc/letsencrypt/live/neocred.in/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/neocred.in/privkey.pem;
    
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;
    ssl_prefer_server_ciphers off;
    
    root /var/www/neocred.in/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location /api/ {
        proxy_pass http://localhost:8001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## SSL Verification Commands

### Test SSL Certificate
```bash
# Check certificate validity
openssl x509 -in /etc/letsencrypt/live/neocred.in/cert.pem -text -noout

# Test SSL connection
openssl s_client -connect neocred.in:443 -servername neocred.in

# Online SSL checker
# https://www.ssllabs.com/ssltest/
```

## Security Headers Configuration

### Additional Nginx Security
```nginx
# Add to server block
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header X-Content-Type-Options nosniff;
add_header X-Frame-Options DENY;
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
```

## Troubleshooting

### Common Issues
```bash
# Certificate not found
sudo certbot certificates

# Renewal test
sudo certbot renew --dry-run

# Nginx configuration test
sudo nginx -t

# Restart services
sudo systemctl restart nginx
```

## Status: ✅ SSL READY
All SSL configuration files and guides created for secure HTTPS deployment.