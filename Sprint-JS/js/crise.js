const image = document.getElementById('crise');

image.addEventListener('mouseover', () => {
  image.style.transition = 'width 0.6s ease';
  image.style.width = '700px';
});

image.addEventListener('mouseout', () => {
  image.style.width = '500px';
});







