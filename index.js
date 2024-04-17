if (performance.navigation.type == performance.navigation.TYPE_RELOAD){
    var randInt1=Math.floor(Math.random()*6+1);
    document.querySelector(".img1").setAttribute('src','images/dice'+randInt1+'.png');

    var randInt2=Math.floor(Math.random()*6+1);
    document.querySelector(".img2").setAttribute('src','images/dice'+randInt2+'.png');

    if(randInt1>randInt2){
      document.querySelector("h1").textContent="Player 1 Wins!";
    }else if(randInt2>randInt1){
      document.querySelector("h1").textContent="Player 2 Wins!";
    }else{
      document.querySelector("h1").textContent="Draw";
    }
  }