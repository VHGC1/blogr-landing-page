let btn = document.getElementById('mobilemenu')
let mobilenav = document.getElementById('mobilenav')

mobilenav.style.left = '-100%'

btn.onclick = () => {
  if(mobilenav.style.left == "-100%"){
    mobilenav.style.left = "50%"
    btn.src = "assets/icon-close.svg"
  }else {
    mobilenav.style.left = "-100%"
    btn.src = "assets/icon-hamburguer.svg"
  }
}