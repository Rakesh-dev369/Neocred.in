// Routes to prerender for SEO and crawler access
export const prerenderRoutes = [
  '/',
  '/learn',
  '/tools',
  '/learn/personal-finance',
  '/learn/traditional-investments', 
  '/learn/market-linked-investments',
  '/learn/banking-payments',
  '/learn/insurance-risk',
  '/learn/corporate-finance',
  '/learn/govt-public-finance',
  '/learn/alt-fintech',
  '/calculators/sip',
  '/calculators/home-loan-emi',
  '/calculators/fd',
  '/calculators/budget-planner',
  '/calculators/emergency-fund'
];

// Generate static HTML for each route
export const generateStaticHTML = (route, content) => {
  const seoData = {
    '/learn/personal-finance': {
      title: 'Personal Finance Guide 2025 - Complete Learning Hub | NeoCred',
      description: 'Master personal finance with budgeting, investing, debt management, retirement planning. Interactive learning with 2025 updated data.',
      keywords: 'personal finance, budgeting, investing, debt management, retirement planning'
    },
    '/learn/traditional-investments': {
      title: 'Traditional Investments 2025 - FD, PPF, NSC Guide | NeoCred', 
      description: 'Complete guide to safe traditional investments. FD rates 7-8.5%, PPF 7.1%, NSC, Government Bonds with 2025 updates.',
      keywords: 'traditional investments, fixed deposits, PPF, NSC, government bonds'
    },
    '/learn/market-linked-investments': {
      title: 'Market Investments 2025 - Stocks, Mutual Funds, ETFs | NeoCred',
      description: 'Master market-linked investments including equity, mutual funds, derivatives, REITs with comprehensive strategies.',
      keywords: 'market investments, stocks, mutual funds, ETFs, derivatives, equity'
    }
  };

  const pageSEO = seoData[route] || {
    title: 'NeoCred - Financial Learning Platform',
    description: 'Learn finance with comprehensive guides and calculators',
    keywords: 'financial education, investment learning'
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageSEO.title}</title>
    <meta name="description" content="${pageSEO.description}">
    <meta name="keywords" content="${pageSEO.keywords}">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${pageSEO.title}">
    <meta property="og:description" content="${pageSEO.description}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://neocred.in${route}">
    <meta property="og:image" content="https://neocred.in/logo.png">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${pageSEO.title}">
    <meta name="twitter:description" content="${pageSEO.description}">
    <meta name="twitter:image" content="https://neocred.in/logo.png">
    
    <!-- Canonical -->
    <link rel="canonical" href="https://neocred.in${route}">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "NeoCred",
      "description": "${pageSEO.description}",
      "url": "https://neocred.in${route}",
      "courseMode": "online"
    }
    </script>
</head>
<body>
    <div id="static-content">
        ${content}
    </div>
    <noscript>
        <p>This page requires JavaScript. Please enable JavaScript or visit our <a href="/learn-text.html">text version</a>.</p>
    </noscript>
</body>
</html>`;
};