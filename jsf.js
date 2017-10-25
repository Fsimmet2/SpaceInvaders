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







  
// fonction bouger div


// Fonction move Right

  function myMove() {

console.log('move');
    var elem = document.querySelector("#langage");
    var position = elem.getBoundingClientRect();
     console.log(elem);
     console.log(position.left);

    var posx = position.left;
    var elem = document.querySelector("#langage");
   
    console.log(position);
    console.log(posx);
   // console.log(elem);

    // var pos = parseInt(x);
    var id = setInterval(frame, 10);
    var maxWidth = window.innerWidth;


    function frame() {

      if (posx == maxWidth - position.width) {

       clearInterval(id);
       console.log(position);
       myMoveB(1);

      } else {

        posx++; 
        elem.style.left = posx + 'px';
      }
    }
  }

// fonction move bottom
    
  function myMoveB(nb) {
    console.log('moveb');
    var y = getComputedStyle(langage).top;
    var posy = parseInt(y);
    var elem = document.querySelector("#langage");
    var id = setInterval(frame, 10);
    var position = elem.getBoundingClientRect();

    var posY = position.y;
    console.log("position.width = " + position.height/3);

    console.log("position.bottom = " + position.bottom/2);
    console.log("posy : " + posy);
    function frame() {
      if (posy == (posY +(position.height/4))) {
       clearInterval(id);
       if (nb == 1){
        myMoveL();
       } else {
         myMove();
       }
        
      
       }     
       else {
        posy++;       
        elem.style.top = posy + 'px'; 
      }
    }
  }


// fonction move left


  function myMoveL() {
    console.log('movel');
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