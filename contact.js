// TO SELECT THE INPUT VALUE :

var sidenav=document.getElementById("sidenav");
var icon=document.getElementById("svg");
var closeicon=document.getElementById("close");

icon.addEventListener("click",()=>{
     sidenav.style.right="0"
})

closeicon.addEventListener("click",()=>{
     sidenav.style.right="-50%";
})