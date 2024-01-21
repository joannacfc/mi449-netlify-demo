
document.addEventListener('DOMContentLoaded', (event) => {
    const earthPage = document.getElementById('earth-page');
    const moonPage = document.getElementById('moon-page');
    const earthImage = document.getElementById('earth-image');
    const moonImage = document.getElementById('moon-image');
  
    earthImage.addEventListener('mouseover', () => {
      earthPage.classList.add('active');
      moonPage.classList.remove('active');
    });
  
    moonImage.addEventListener('mouseover', () => {
      moonPage.classList.add('active');
      earthPage.classList.remove('active');
    });
  });
  