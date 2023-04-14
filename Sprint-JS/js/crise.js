const image = document.getElementById('crise');

image.addEventListener('mouseover', () => {
  image.style.transition = 'width 0.6s ease';
  image.style.width = '800px';
});

image.addEventListener('mouseout', () => {
  image.style.width = '700px';
});







