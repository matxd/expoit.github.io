var padraoyt = document.getElementsByClassName("icon-yt-1")
var sombrayt = document.getElementsByClassName("icon-yt-1.1")


function imgpadraoyt () {
    padraoyt.src = "./imagens/1.png"
}

function imgsombrayt () {
    sombrayt.src = "./imagens/1.1.png"
}


padraoyt.addEventListener("mouseenter", imgsombrayt)
sombrayt.addEventListener("mouseleave", imgpadraoyt)
