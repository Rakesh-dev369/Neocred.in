// Image optimization utilities
export const optimizeImageUrl = (url, width = 400, quality = 80) => {
  if (!url || url.includes('data:')) return url;
  
  // For external images, we can't optimize them directly
  // But we can add loading strategies
  return url;
};

export const getImagePlaceholder = (width = 400, height = 300) => {
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial, sans-serif" font-size="14">
        Loading...
      </text>
    </svg>
  `)}`;
};

export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};