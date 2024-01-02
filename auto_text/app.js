const el = document.querySelector(".container");
const careers = ["YouTuber","Web Developer","Freelancer"];

let idx = 0;
let char = 0;
update();

function update(){
  char++;
  el.innerHTML = `<h1>
  I am a ${careers[idx].slice(0,char)}
  </h1>`;
  

  if(char === careers[idx].length){
    idx++;
    char =0;
  }

  if(idx === careers.length){
    idx = 0;
  }
  setTimeout(update,400)
}
