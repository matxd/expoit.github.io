var opacidadenormal = document.getElementsById("icon-yt-1")
var opacidadealta = document.getElementById("icon-yt-1.1")
var lampada = document.getElementById("lampada")

 function islampadaBroken () {
    return lampada.src.indexOf ("quebrada") > -1
} 
 function lampadaOn () {
     if (!islampadaBroken()) {
    lampada.src = "./imagens/ligada.jpg"
    }
} 
 function lampadaOff () {
     if (!islampadaBroken())
    lampada.src = "./imagens/desligada.jpg"
}
function lampadaBroken () {
    lampada.src = "./imagens/quebrada.jpg"
} 

turnOn.addEventListener("click", lampadaOn)
turnOff.addEventListener("click", lampadaOff)
lampada.addEventListener("mouseenter", lampadaOn)
lampada.addEventListener("mouseleave", lampadaOff)
lampada.addEventListener("dblclick", lampadaBroken)