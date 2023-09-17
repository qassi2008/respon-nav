document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.toggle-button');
  const navbarLinks = document.querySelector('.navbar-links');
  const centeredText = document.querySelector('.centered-text');
  const brandTitle = document.querySelector('.brand-title');

  toggleButton.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');
  });

  centeredText.addEventListener('click', function() {
    alert('Welcome to your page!');
  });
  brandTitle.addEventListener('click', function (){
    alert('Hva heter du!')
  })
});
