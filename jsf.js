  function switchGame(debut, fin){
      var menu = document.querySelector(debut) ;
      var jeu = document.querySelector(fin);

      menu.style.display = "none";
      jeu.style.display = "block";
      myMove();
  }

//   var l = window.innerWidth;
//   var h = window.innerHeight;
//   var elem = document.querySelector("#joueur");
//   console.log(l);
//   window.addEventListener("keydown", moveLeft);
//   window.addEventListener("keydown", moveRight);


//   function moveLeft(e){
//     if (e.keyCode == "37"){
//         var elle = getComputedStyle(joueur).marginLeft;
//         if (parseInt(elle) >= 0){
//          var x = (parseInt(elle) - 10);
//          console.log(x);
//          elem.style.marginLeft = x + "px";
//          var elle = getComputedStyle(joueur).marginLeft;
//          console.log(elle);}

//   }
// }

//   function moveRight(e){
//     if (e.keyCode == "39" ){
//         var ele = getComputedStyle(joueur).marginLeft;
//         if (parseInt(ele) <=  l - 95){
//          var x = (parseInt(ele) + 10);
//          console.log(x);
//          elem.style.marginLeft = x + "px";
//          var ele = getComputedStyle(joueur).marginLeft;
//          console.log(ele);}
//   }
//   }







  
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
        document.querySelector("#img3").style.display = "none"; 
       clearInterval(id);
       myMoveB();
      } else {
        pos--;       
        elem.style.left = pos + 'px'; 
      }
    }
  }





  var l = window.innerWidth;
  console.log(l);
  
  var elems = document.querySelector("#bonhomme");
  var missile = document.querySelector("#missile");
  console.log(elems.getBoundingClientRect());
  
  var pos = 0;
  window.addEventListener("keydown", move);
  
  function move(e){
    if (e.keyCode == "39" ){
      widthbonhomme = elems.getBoundingClientRect().width;
      rightbonhomme =  elems.getBoundingClientRect().right;
      console.log(rightbonhomme);
      if(rightbonhomme >= l - 20){
        console.log('stop');
      }else{
        console.log(pos);
        pos += 15;
        elems.style.marginLeft = pos + "px";
      }
      // var ele = getComputedStyle(codeur).marginLeft;
      // if (parseInt(ele) <= l - 90){
      //   var x = (parseInt(ele) + 10);
      //   console.log(x);
      //   elem.style.marginLeft = x + "px";
      //   var ele = getComputedStyle(codeur).marginLeft;
      //   console.log(ele);
      // }
    }
    if (e.keyCode == "37"){
      widthbonhomme = elems.getBoundingClientRect().width;
      leftbonhomme = elems.getBoundingClientRect().left;
      console.log(leftbonhomme);
      if(leftbonhomme <= 0){
        console.log('stop');
      }else{
        console.log(pos);
        pos -= 15;
        elems.style.marginLeft = pos + "px";
      }
      // var elle = getComputedStyle(codeur).marginLeft;
      // if (parseInt(elle) >= 0){
      //   var x = (parseInt(elle) - 10);
      //   console.log(x);
      //   elem.style.marginLeft = x + "px";
      //   var elle = getComputedStyle(codeur).marginLeft;
      //   console.log(elle);}
    }
    if (e.keyCode == "32" ){
        //var cln = elmnt.cloneNode(true);
        // var missile = document.querySelector("#missile");
        // myMove();
        var max = window.innerHeight;
        var bonhomme = document.getElementById('bonhomme');
        var item = document.getElementById('missile');
        var cln = item.cloneNode(true);
        var posMissile = 0;
        var id = setInterval(frame, 1);
        cln.style.display = "block";
        document.getElementById('codeur').appendChild(cln);
        console.log(cln.style.left);
        console.log(bonhomme.style.left);
  
        cln.style.left = bonhomme.getBoundingClientRect().left + 'px';
        console.log();
        function frame(){
          if(posMissile == -max){
            clearInterval(id);
          } else {
            posMissile++;
            cln.style.bottom = posMissile + "px";
          }
        }
    }
  }
  
  // function myMove() {
  //   var max = window.innerHeight;
  //   var elem = document.getElementById("missile");
  //   var pos = 0;
  //   var id = setInterval(frame, 1);
  //   function frame() {
  //     if (pos == -max) {
  //       clearInterval(id);
  //     } else {
  //       pos--;
  //       elem.style.top = pos + 'px';
  //     }
  //   }
  // }
  
var img = document.querySelectorAll('.images'); 
var miss = document.querySelector('.missile'); 
console.log(img); 

function colision (){
  for(var i = 0; i < img.length; i++ ) {

    img[i].getBoundingClientRect.bottom; 
    miss.getBoundingClientRect.top;

  if(img[i] == miss.top){

    if(miss.top == img[i].left || img[i].right){
      img[i].style.display = none; 
    }
    }
  }

}