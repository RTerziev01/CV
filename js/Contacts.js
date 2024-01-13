const contactBoxes = document.querySelectorAll('.contact-info');

contactBoxes.forEach((box) => {
  box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'yellow';
  });

  box.addEventListener('mouseout', () => {
    box.style.backgroundColor = '';
  });
});
