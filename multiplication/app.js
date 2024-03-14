const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const quesel = document.getElementById("ques");
const formel = document.getElementById("form");
const inputel = document.getElementById("input");
const scoreel = document.getElementById("score");



quesel.innerText = `What is ${num1} multiply by ${num2}?`;

const correct = num1*num2;
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
  score =0;
}
scoreel.innerText = `score: ${score}`;

formel.addEventListener("submit",()=>{
  const user = +inputel.value;
  if(user === correct){
    score++;
    update();
  }
  else{
    score--;
    update();
  }
})

function update(){
  localStorage.setItem("score", JSON.stringify(score));
}

