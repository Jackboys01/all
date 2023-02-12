const playerText = document.querySelector("#playertext");
const computerText = document.querySelector("#computertext");
const resultText = document.querySelector("#result");
const choiceBtn = document.querySelectorAll(".buttons");

let player;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener("click" ,  ()=> {

player = button.textContent;
random();

playerText.textContent = `Player : ${player}`;
computerText.textContent = `Computer : ${computer}`;
resultText.textContent = checkWinner();

}));

function random()
{
   let randomNum = Math.floor(Math.random() *3 )+1;

   switch(randomNum){
    case 1:
        computer = "Rock";
        break;
      
    case 2:
        computer = "Paper";
        break; 
     
    case 3:
         computer = "Scissor";
         break;     
   }

}

function checkWinner()
{
    if(player==computer)
    {
        return "Draw!";
    }
    else if(player=="Rock")
    {
        if(computer=="Scissor")
        {
            return "Player Wins";
        }
        else
        {
            return "Computer Wins";
        }
    }
    
    else if(player=="Scissor")
    {
        if(computer=="Paper")
        {
            return "Player Wins";
        }
        else
        {
            return "Computer Wins";
        }
    }

    else if(player=="Paper")
    {
        if(computer=="Rock")
        {
            return "Player Wins";
        }
        else
        {
            return "Computer Wins";
        }
    }
}