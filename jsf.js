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
        if (parseInt(ele) <= l - 95){
         var x = (parseInt(ele) + 10);
         console.log(x);
         elem.style.marginLeft = x + "px";
         var ele = getComputedStyle(joueur).marginLeft;
         console.log(ele);}
  }
  }



  window.onload = function(){
    var max_width = window.innerWidth;
    var max_height = window.innerHeight;
    
    var directions = {left:1,up:2,right:3,down:4}
    var direction = getRandomDirection();
    var distance = getRandomDistance();
    
    var target = document.querySelector("#langage");
    var target_pos = {top:0,left:0}
    
    var i = 0;
    
    var render_rate = 10;
    var move_step = 2;
    
    setInterval(function(){
        i++;
        if(i > distance){
           distance = getRandomDistance();
           direction = getRandomDirection();
           i = 0;
        }
        move(target,direction,move_step)
    },render_rate)
    
    function getRandomDistance(){
        return Math.floor((Math.random() * 20) + 1) + 5;
    }
    
    function getRandomDirection(){
        return Math.floor((Math.random() * 4) + 1); }
  
        function move(el,direction,step){
      switch(direction){
         case directions.left: {
           if(target_pos.left < max_width){
               target_pos.left += step;
               target.style.left = target_pos.left + "px";
           }
           break;
         }
         case directions.up: {
           if(target_pos.top < max_height){
               target_pos.top += step;
               target.style.top = target_pos.top + "px";
           }
           break;
         }
          
         case directions.right: {
           if(target_pos.left > 0){
              target_pos.left -= step;
              target.style.left = target_pos.left + "px";
           }
           break;
         }
          
         case directions.down: {
           if(target_pos.top > 0){
              target_pos.top -= step;
              target.style.top = target_pos.top + "px";
           }
           break;
         }
      }
    }
  }
