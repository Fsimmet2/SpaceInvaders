  function switchGame(debut, fin){
      var menu = document.querySelector(debut) ;
      var jeu = document.querySelector(fin);

      menu.style.display = "none";
      jeu.style.display = "block";
  }

  var l = window.innerWidth;
  var h = window.innerHeight;
  var elem = document.querySelector("#joueur");
  console.log(h);
  window.addEventListener("keydown", moveLeft);
  window.addEventListener("keydown", moveRight);
  function moveLeft(e){
    if (e.keyCode == "37"){
        var elle = getComputedStyle(joueur).marginLeft;
        if (parseInt(elle) >= 0){
         var x = (parseInt(elle) - 10);
         console.log(x);
         elem.style.marginLeft = x + "px";
         var elle = getComputedStyle(joueur).marginLeft;
         console.log(elle);}

  }
}

  function moveRight(e){
    if (e.keyCode == "39" ){
        var ele = getComputedStyle(joueur).marginLeft;
        if (parseInt(ele) <= l - 70){
         var x = (parseInt(ele) + 10);
         console.log(x);
         elem.style.marginLeft = x + "px";
         var ele = getComputedStyle(joueur).marginLeft;
         console.log(ele);}
  }
  }

var maxWidth = window.innerWidth;
var maxHeight = window.innerHeight;
var div = document.querySelector(".test");
var divPos = {top: 0; right: 0};
  function move(){

  }