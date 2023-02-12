function playGame(){
    var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);


var image1 = document.querySelector(".diceOne").
setAttribute("src" , `/images/dice${randomNumber1}.png`);

var image2 = document.querySelector(".diceTwo").
setAttribute("src" , `/images/dice${randomNumber2}.png`);

var heading = document.querySelector("h1");
if(randomNumber1>randomNumber2){
    heading.textContent="🚩🚩Player 1 Wins"
}
else if(randomNumber2>randomNumber1)
{
    heading.textContent="Player 2 Wins 🚩🚩";
}

else{
    heading.textContent="Draw🎲";
}
}

/*      or we could have done 
  
   document.queryselector("h1")
  .innerHTML = " Player wins"    
  
*/