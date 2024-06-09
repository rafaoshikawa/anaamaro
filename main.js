import headerBurguer from "./styles/Header/header-burguer.js";
headerBurguer();


//CODIGO DAS SETAS DO CARROSSEL DO FEEDBACK
document.addEventListener('DOMContentLoaded', function () {
  const feedbackContainer = document.querySelector('.feedbackContainer');
  const scrollAmount = 100;

  document.querySelector('.scrollButton.left').addEventListener('click', function () {
    feedbackContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  document.querySelector('.scrollButton.right').addEventListener('click', function () {
    feedbackContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});



//
