const navbar = document.querySelector('.navbar');
const logoBox = document.querySelector('.logo-image');
const logo = document.querySelector('.navbar .logo-image img');

window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  switch (window.scrollY) {
    case 0:
      logoBox.style.width = '0px';
      logo.style.position = 'absolute';
      logo.style.top = '30vh';
      logo.style.height = '278px';
      logo.style.transform = 'translateX(-50%)';
      logo.style.left = '50%';
      break;
    case 102:
      logoBox.style.width = '2px';
      logo.style.position = 'absolute';
      logo.style.top = '19.8vh';
      logo.style.height = '203px';
      logo.style.transform = 'translateX(-50%)';
      logo.style.left = '50%';
      break;
    case 306:
      logoBox.style.width = '104px';
      logo.style.position = 'absolute';
      logo.style.top = '9.6vh';
      logo.style.height = '145px';
      logo.style.transform = 'translateX(-50%)';
      logo.style.left = '50%';
      break;
    case 408:
      logoBox.style.width = '150px';
      logo.style.position = 'relative';
      logo.style.top = '0vh';
      logo.style.height = '90px';
      logo.style.transform = 'none';
      logo.style.left = 'auto';
      break;
  }
});
