const navBarToggle = document.getElementById('navBarToggle');
const toggleLogo = document.getElementById('toggleLogo');
const navBar = document.getElementById("navBar");

//animation for the mobile navBar
toggleLogo.addEventListener("click", function(){
  navBar.style = `display: flex;`;
  setTimeout(function(){navBar.style = `display: flex; animation-name: toUp; animation-duration: 2s;animation-fill-mode: forwards;`}, 2500)
  
})
//check the size of the window is changed!
window.addEventListener("resize", function(event) {
  let w = document.body.clientWidth ;
  if(w > 550){
   navBar.style = `display: flex;`;
  }else{
    navBar.style = `display: none;`;
  }
})