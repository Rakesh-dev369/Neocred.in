// SEO utilities for dynamic meta tags and structured data
export const generateSEOTags = (page) => {
  const baseUrl = 'https://neocred.in';
  
  const seoData = {
    'personal-finance': {
      title: 'Personal Finance Guide 2025 - Budgeting, Investing, Tax Planning | NeoCred',
      description: 'Master personal finance with our comprehensive guide covering budgeting, saving, investing, debt management, retirement planning, and tax optimization. Updated for 2025.',
      keywords: 'personal finance, budgeting, saving, investing, debt management, retirement planning, tax planning, financial literacy',
      image: `${baseUrl}/images/personal-finance-og.jpg`,
      type: 'article',
      schema: {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "NeoCred Personal Finance Guide",
        "description": "Comprehensive personal finance education covering budgeting, investing, and wealth building",
        "url": `${baseUrl}/learn/personal-finance`,
        "courseMode": "online",
        "educationalLevel": "beginner to advanced",
        "teaches": ["Budgeting", "Investing", "Debt Management", "Retirement Planning", "Tax Planning"]
      }
    },
    'traditional-investments': {
      title: 'Traditional Investments Guide 2025 - FD, PPF, NSC, Bonds | NeoCred',
      description: 'Complete guide to traditional investments including Fixed Deposits, PPF, NSC, Government Bonds with 2025 rates and strategies.',
      keywords: 'traditional investments, fixed deposits, PPF, NSC, government bonds, safe investments',
      image: `${baseUrl}/images/traditional-investments-og.jpg`,
      type: 'article'
    },
    'market-linked-investments': {
      title: 'Market-Linked Investments 2025 - Stocks, Mutual Funds, ETFs | NeoCred',
      description: 'Master market-linked investments including direct equity, mutual funds, ETFs, derivatives, and real estate investments.',
      keywords: 'market investments, stocks, mutual funds, ETFs, derivatives, equity investing',
      image: `${baseUrl}/images/market-investments-og.jpg`,
      type: 'article'
    }
  };
  
  return seoData[page] || {
    title: 'Financial Learning Hub | NeoCred',
    description: 'Learn finance with comprehensive guides and calculators',
    keywords: 'financial education, investment learning, finance guides',
    image: `${baseUrl}/images/default-og.jpg`,
    type: 'website'
  };
};

export const updateMetaTags = (seoData) => {
  // Update title
  document.title = seoData.title;
  
  // Update meta tags
  const metaTags = [
    { name: 'description', content: seoData.description },
    { name: 'keywords', content: seoData.keywords },
    { property: 'og:title', content: seoData.title },
    { property: 'og:description', content: seoData.description },
    { property: 'og:image', content: seoData.image },
    { property: 'og:type', content: seoData.type },
    { property: 'twitter:title', content: seoData.title },
    { property: 'twitter:description', content: seoData.description },
    { property: 'twitter:image', content: seoData.image }
  ];
  
  metaTags.forEach(tag => {
    const existingTag = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
    if (existingTag) {
      existingTag.setAttribute('content', tag.content);
    } else {
      const newTag = document.createElement('meta');
      if (tag.name) newTag.setAttribute('name', tag.name);
      if (tag.property) newTag.setAttribute('property', tag.property);
      newTag.setAttribute('content', tag.content);
      document.head.appendChild(newTag);
    }
  });
  
  // Add structured data
  if (seoData.schema) {
    let schemaScript = document.getElementById('structured-data');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'structured-data';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(seoData.schema);
  }
};