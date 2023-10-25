let cs = document.getElementsByClassName("grid-carousel")[0].children[1].children;
let i=0;
document.addEventListener("keydown",(event) => {
  if (event.key=="ArrowRight") {
    next();
  }
  if (event.key=="ArrowLeft") {
    prev();
  }
});
function prev() {
  if (i<=0) return;
  i--;
  cs[i+1].style.display="none";
  cs[i].style.display="";
}
function next() {
  if (i>=cs.length-1) return;
  i++;
  cs[i-1].style.display="none";
  cs[i].style.display="";
}
document
  .getElementsByClassName("prev")[0]
  .addEventListener("click",(event)=> { prev(); });
document
  .getElementsByClassName("next")[0]
  .addEventListener("click",(event)=> { next(); });

