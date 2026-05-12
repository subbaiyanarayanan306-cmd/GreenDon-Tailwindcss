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

// PRODUCT CONTAINER :
var productContainer=document.getElementById("product-container");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll("div");
console.log(productlist)

      search.addEventListener("keyup", () => {
        var enterValue = event.target.value.toUpperCase();
        console.log(enterValue);

        for (count = 0; count < productlist.length; count++) {
          var productname=productlist[count].querySelector("h2").textContent
          if (productname.toUpperCase().indexOf(enterValue) < 0) {
            productlist[count].style.display = "none";
          } else {
            productlist[count].style.display = "block";
          }
        }
      });