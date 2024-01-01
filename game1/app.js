let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const para =document.querySelector("#msg");

const userpara=document.querySelector("#user-score");
const comppara=document.querySelector("#comp-score");


const compchoice= () => {
  const opt =["rock","paper","scissor"];
  const idx=Math.floor(Math.random()*3);
  return opt[idx];
}

const draw= () =>{
  console.log("it was draw");
  para.innerText ="Game was draw.Play again.";
  para.style.backgroundColor="bisque";
  para.style.color="rgb(47, 5, 86)";
}

const winner =(win,userchoice,cchoice) =>{
  if(win){
    userScore++;
    userpara.innerText=userScore;
    console.log("you win");
    para.innerText =`You win! ${userchoice} beats ${cchoice}`;
    para.style.backgroundColor="green";
    para.style.color="white";
  }
  else{
    compScore++;
    comppara.innerText=compScore;
    console.log("you lose");
    para.innerText =`You lose! ${cchoice} beats ${userchoice}`;
    para.style.backgroundColor="red";
    para.style.color="yellow";
  }
}

const play= (userchoice) => {
  console.log("user choice",userchoice);
  const cchoice=compchoice();

  if(userchoice==cchoice){
    draw();
  }
  else{
    let win=true;
    if(userchoice==="rock"){
      win=cchoice ==="paper"?false:true;
    }

    else if(userchoice ==="paper"){
      win =cchoice=== "scissor"?false:true;
    }
    else{
      win=cchoice=== "rock"?false:true;
    }
    winner(win,userchoice,cchoice);
  }
}

choices.forEach((choice)=>{
  
  choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    console.log("choice was clicked",userchoice); 
    play(userchoice);
  });
});