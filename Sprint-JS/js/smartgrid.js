const image = document.getElementById('smartgrid');

image.addEventListener('mouseover', () => {
  image.style.transition = 'width 0.6s ease';
  image.style.width = '1000px';
});

image.addEventListener('mouseout', () => {
  image.style.width = '500px';
});

