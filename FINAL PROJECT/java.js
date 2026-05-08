function scrollCarousel(direction) {
  const container = document.getElementById('carouselContent');
  // Scrolls by the width of the visible area
  const scrollStep = container.clientWidth * 0.8; 
  container.scrollBy({
    left: direction * scrollStep,
    behavior: 'smooth'
  });
}
