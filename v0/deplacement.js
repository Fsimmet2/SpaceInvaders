var l = window.innerWidth;
console.log(l);

var elem = document.querySelector("#ship");
var missile = document.querySelector("#missile");
console.log(elem.getBoundingClientRect());

var pos = 0;
window.addEventListener("keydown", move);

function move(e){
  if (e.keyCode == "39" ){
    widthShip = elem.getBoundingClientRect().width;
    rightShip =  elem.getBoundingClientRect().right;
    console.log(rightShip);
    if(rightShip >= l - 20){
      console.log('stop');
    }else{
      console.log(pos);
      pos += 15;
      elem.style.marginLeft = pos + "px";
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
    widthShip = elem.getBoundingClientRect().width;
    leftShip = elem.getBoundingClientRect().left;
    console.log(leftShip);
    if(leftShip <= 0){
      console.log('stop');
    }else{
      console.log(pos);
      pos -= 15;
      elem.style.marginLeft = pos + "px";
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
      var ship = document.getElementById('ship');
      var item = document.getElementById('missile');
      var cln = item.cloneNode(true);
      var posMissile = 0;
      var id = setInterval(frame, 1);
      cln.style.display = "block";
      document.getElementById('codeur').appendChild(cln);
      console.log(cln.style.left);
      console.log(ship.style.left);

      cln.style.left = ship.getBoundingClientRect().left + 'px';
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
