let userScore  = 0;
let compScore = 0;

const choices  = document.querySelectorAll(".choice");
const msgPara = document.querySelector("#msg");
const uS = document.querySelector("#user-score");
const cS = document.querySelector("#comp-score");

const showWinner=(userWin)=>{
  if (userWin) {
    userScore++;
    uS.innerHTML = userScore;
    console.log("You win")
    msgPara.innerHTML = "You win the match";
    msgPara.style.backgroundColor = "green";
  }
  else {
    compScore++;
    cS.innerHTML = compScore;
    console.log("You loose")
    msgPara.innerHTML = "You Loose the match";
    msgPara.style.backgroundColor = "red";
  }
}

const compChoice = () =>{
  const option = ["rock","paper","sizor"];
  const rID = Math.floor(Math.random()*3);
  return option[rID];
}

const drawGame =()=>{
  msgPara.innerHTML= "Match Draw! Play Next Move";
  msgPara.style.backgroundColor = "blue";
  console.log("Your Game is draw ");
}

const playGame = (userChoice)=>{
  const compValue  = compChoice();
  if(userChoice===compValue){
    drawGame();
  }
  else{
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compValue === "paper"?false:true;
    }
    else if (userChoice === "paper") {
      userWin = compValue === "sizor"?false:true;
    }
    else {userWin = compValue ==="rock"?false:true};
    showWinner(userWin);
  }
  
}

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    userChoice =  choice.getAttribute("id");
    playGame(userChoice);
  })
})