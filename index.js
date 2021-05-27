let btn = document.getElementById('mobilemenu')
let mobilenav = document.getElementById('mobilenav')

mobilenav.style.left = "-100%"

btn.onclick = () => {
  if(mobilenav.style.left != "-100%"){
    mobilenav.style.left = "-100%"
    console.log(mobilenav.style.left)
    btn.src = "assets/icon-hamburger.svg"
  }

  else{
    mobilenav.style.left = "5%"
    console.log(mobilenav.style.left)
    btn.src = "assets/icon-close.svg"
  }
}