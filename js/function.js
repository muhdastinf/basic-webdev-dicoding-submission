document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('nav ul');
    const closeIcon = document.querySelector('.close-icon');
  
    menuIcon.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
  
      if (this.classList.contains('active')) {
        closeIcon.style.display = 'block';
      } else {
        closeIcon.style.display = 'none';
      }
    });
  
    closeIcon.addEventListener('click', function() {
      menuIcon.classList.remove('active');
      navMenu.classList.remove('active');
      this.style.display = 'none';
    });
  });
  