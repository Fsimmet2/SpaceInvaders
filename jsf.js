  function switchGame(debut, fin){
      var menu = document.querySelector(debut) ;
      var jeu = document.querySelector(fin);

      menu.style.display = "none";
      jeu.style.display = "block";
      myMove();
  }

  var l = window.innerWidth;
  var h = window.innerHeight;
  var elem = document.querySelector("#joueur");
  console.log(l);
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
        if (parseInt(ele) <=  l - 95){
         var x = (parseInt(ele) + 10);
         console.log(x);
         elem.style.marginLeft = x + "px";
         var ele = getComputedStyle(joueur).marginLeft;
         console.log(ele);}
  }
  }

  var elem = document.querySelector("#langage");
  console.log(elem.getBoundingClientRect().top);

  function myMove() {

    var x = getComputedStyle(langage).top;
    var elem = document.querySelector("#langage");

    console.log(x);
    console.log(elem);

    var pos = parseInt(x);
    var id = setInterval(frame, 10);
    var maxWidth = window.innerWidth;


    function frame() {

      if (pos == maxWidth - 545) {

       clearInterval(id);
       myMoveB(200, 1);

      } else {
        
        pos++; 
        elem.style.left = pos + 'px'; 
      }
    }
  }

  function myMoveB(y, nb) {
    var x = getComputedStyle(langage).top;
    var pos = parseInt(x);
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == y) {
       clearInterval(id);
       if(nb == "1"){
        myMoveL();
       }else {
         myMove();
       }
       
      } else {
        pos++; 
        
        elem.style.top = pos + 'px'; 
      }
    }
  }

  function myMoveL() {
    console.log(elem);
    var x = getComputedStyle(langage).left;
    var maxWidth = window.innerWidth;
    var pos = parseInt(x);
    console.log(pos);
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 0) {
       clearInterval(id);
       myMoveB(400);
      } else {
        pos--; 
        
        elem.style.left = pos + 'px'; 
      }
    }
  }