# 🌐 DNS Configuration Guide

## DNS Records Setup

### Required DNS Records
```
Type    Name    Value                   TTL     Priority
A       @       YOUR_SERVER_IP          300     -
A       www     YOUR_SERVER_IP          300     -
A       api     YOUR_SERVER_IP          300     -
CNAME   *       neocred.in              300     -
MX      @       mail.neocred.in         300     10
TXT     @       "v=spf1 include:_spf.google.com ~all"  300  -
```

### Step-by-Step Configuration

#### 1. Main Domain (neocred.in)
```
Record Type: A
Name: @ (or leave blank)
Value: YOUR_SERVER_IP_ADDRESS
TTL: 300 seconds (5 minutes)
```

#### 2. WWW Subdomain
```
Record Type: A
Name: www
Value: YOUR_SERVER_IP_ADDRESS
TTL: 300 seconds
```

#### 3. API Subdomain
```
Record Type: A
Name: api
Value: YOUR_SERVER_IP_ADDRESS
TTL: 300 seconds
```

#### 4. Wildcard Subdomain (Optional)
```
Record Type: CNAME
Name: *
Value: neocred.in
TTL: 300 seconds
```

## Domain Registrar Specific Instructions

### Namecheap
1. Login to Namecheap account
2. Go to Domain List → Manage
3. Advanced DNS tab
4. Add records as specified above

### GoDaddy
1. Login to GoDaddy account
2. My Products → DNS
3. Add records in DNS Management

### Cloudflare (Recommended)
1. Add site to Cloudflare
2. Update nameservers at registrar:
   ```
   NS1: eva.ns.cloudflare.com
   NS2: walt.ns.cloudflare.com
   ```
3. Configure DNS records in Cloudflare dashboard

### Google Domains
1. Go to DNS settings
2. Custom resource records
3. Add A and CNAME records

## Email Configuration (Optional)

### Google Workspace Setup
```
MX Records:
Priority 1:  ASPMX.L.GOOGLE.COM
Priority 5:  ALT1.ASPMX.L.GOOGLE.COM
Priority 5:  ALT2.ASPMX.L.GOOGLE.COM
Priority 10: ALT3.ASPMX.L.GOOGLE.COM
Priority 10: ALT4.ASPMX.L.GOOGLE.COM

TXT Record:
v=spf1 include:_spf.google.com ~all
```

### Simple Email Setup
```
MX Record:
Priority 10: mail.neocred.in

A Record:
Name: mail
Value: YOUR_SERVER_IP
```

## CDN Configuration (Cloudflare)

### Cloudflare DNS Settings
```
Type    Name    Content             Proxy Status
A       @       YOUR_SERVER_IP      Proxied ☁️
A       www     YOUR_SERVER_IP      Proxied ☁️
A       api     YOUR_SERVER_IP      Proxied ☁️
CNAME   *       neocred.in          Proxied ☁️
```

### Cloudflare Optimization Settings
- **SSL/TLS**: Full (strict)
- **Always Use HTTPS**: On
- **Automatic HTTPS Rewrites**: On
- **Minimum TLS Version**: 1.2
- **Caching Level**: Standard
- **Browser Cache TTL**: 4 hours

## DNS Propagation Check

### Verification Commands
```bash
# Check A record
dig neocred.in A
dig www.neocred.in A
dig api.neocred.in A

# Check from different locations
nslookup neocred.in 8.8.8.8
nslookup neocred.in 1.1.1.1

# Online tools
# https://dnschecker.org/
# https://whatsmydns.net/
```

### Expected Results
```bash
# neocred.in A record
neocred.in.     300     IN      A       YOUR_SERVER_IP

# www.neocred.in A record  
www.neocred.in. 300     IN      A       YOUR_SERVER_IP

# api.neocred.in A record
api.neocred.in. 300     IN      A       YOUR_SERVER_IP
```

## Server Configuration

### Nginx Virtual Host
```nginx
# /etc/nginx/sites-available/neocred.in
server {
    listen 80;
    server_name neocred.in www.neocred.in *.neocred.in;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name neocred.in www.neocred.in;
    
    root /var/www/neocred.in/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}

server {
    listen 443 ssl http2;
    server_name api.neocred.in;
    
    location / {
        proxy_pass http://localhost:8001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Troubleshooting

### Common DNS Issues
```bash
# DNS not propagating
# Wait 24-48 hours for full propagation
# Check TTL values (lower = faster updates)

# Wrong IP address
dig neocred.in +short
# Should return YOUR_SERVER_IP

# Subdomain not working
dig api.neocred.in +short
# Should return YOUR_SERVER_IP

# Clear local DNS cache
# Windows: ipconfig /flushdns
# Mac: sudo dscacheutil -flushcache
# Linux: sudo systemctl restart systemd-resolved
```

### DNS Validation Tools
- **DNS Checker**: https://dnschecker.org/
- **What's My DNS**: https://whatsmydns.net/
- **DNS Propagation**: https://dnspropagation.net/
- **MX Toolbox**: https://mxtoolbox.com/

## Status: ✅ DNS READY
Complete DNS configuration guide created for production deployment.