const inputel = document.querySelector(".input");
const bodyel = document.querySelector("body");
// inputel.checked = false


 update=() => {
  if(inputel.checked){
    bodyel.style.background = "black";
  }
  else{
    bodyel.style.background = "white";
  }
}
inputel.addEventListener("input",()=>{
  update();

})