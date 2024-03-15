const hourel = document.getElementById("hr");
const minel = document.getElementById("min");
const secel = document.getElementById("sec");
const ampmel = document.getElementById("ampm");


function update (){
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if(h>12){
    h = h-12;
    ampm="PM";
  }

  h = h<10 ? "0"+h:h;
  m = m<10 ? "0"+m:m;
  s = s<10 ? "0"+s:s;

  hourel.innerText = h;
  minel.innerText = m;
  secel.innerText=s;
  ampmel.innerText = ampm;

  setTimeout(()=>{
    update();
  
  },1000)
  
}

update();