let btn = document.getElementById('mobilemenu')
let mobilenav = document.getElementById('mobilenav')

mobilenav.style.left = "-100%"

btn.onclick = () => {
  switch(mobilenav.style.left){
    case "-100%":
      mobilenav.style.left = "5%";
      btn.src = "assets/icon-close.svg"; 
      /*
    case "50%":
      mobilenav.style.left = "-100%"
      //btn.src = "assets/icon-hamburger.svg"*/
  }
}