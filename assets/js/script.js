var maxwidth = window.innerWidth;
var maxheight = window.innerHeight;

console.log(maxwidth);
console.log(maxheight);

function moveSheep(e){

  var sheep = document.querySelector(".sheep");
  
  if(e.keyCode == '37'){
    console.log('left');
  }
  if(e.keyCode == '39'){
    console.log('right');
  }
}

window.addEventListener("keydown", moveSheep);
