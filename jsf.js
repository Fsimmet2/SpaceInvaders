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







  




  function myMove() {


    var elem = document.querySelector("#langage");
    var position = elem.getBoundingClientRect();
     console.log(elem);
     console.log(position.top);

    var posx = position.top;
    var elem = document.querySelector("#langage");
    var posy = position.right;
    console.log(position);
    console.log(posx);
    console.log(posy);
   // console.log(elem);

    // var pos = parseInt(x);
    var id = setInterval(frame, 10);
    var maxWidth = window.innerWidth;


    function frame() {

      if (posx == maxWidth - position.width) {

       clearInterval(id);
       console.log(position);
       myMoveB();

      } else {

        posx++; 
        elem.style.left = posx + 'px';
      }
    }
  }


  function myMoveB() {
    var x = getComputedStyle(langage).top;
    var pos = parseInt(x);
    var elem = document.querySelector("#langage");
    var id = setInterval(frame, 10);
    var position = elem.getBoundingClientRect();
    function frame() {
      if (pos == (position.bottom/2)) {
       clearInterval(id);
        myMoveL();
      
       }     
       else {
        pos++;       
        elem.style.top = pos + 'px'; 
      }
    }
  }





  function myMoveL() {
    var elem = document.querySelector("#langage");
    var x = getComputedStyle(langage).left;
    var maxWidth = window.innerWidth;
    var pos = parseInt(x);
    console.log(pos);
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 0) {
       clearInterval(id);
       myMoveB();
      } else {
        pos--;       
        elem.style.left = pos + 'px'; 
      }
    }
  }