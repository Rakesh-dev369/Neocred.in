export const smoothScrollTo = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

export const handleHashLink = (hash) => {
  if (hash) {
    setTimeout(() => smoothScrollTo(hash.replace('#', '')), 100);
  }
};