
 mybutton = document.getElementById("back2Top");

//visar knappen efter att du scrollat ner 20.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//scrolla till top
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; //Chrome, Firefox, IE and Opera
}