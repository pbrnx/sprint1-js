const image = document.getElementById('smartgrid');

image.addEventListener('mouseover', () => {
  image.style.transition = 'width 0.6s ease';
  image.style.width = '825px';
});

image.addEventListener('mouseout', () => {
  image.style.width = '800px';
});

