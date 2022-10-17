const turnOn = document.getElementById ("turnOn")
const turnOff = document.getElementById ("turnOff")
const lamp = document.getElementById ("lamp")


function isLampBroken () {
    return lamp.src.indexOf("quebrada") > -1
}

function lampOn () {
    if (!isLampBroken()) {
        lamp.src = "./imagens/ligada.jpg"; 
        lamp.style.background = "radial-gradient(rgb(187, 187, 39),rgb(122, 122, 40)30%, #1e1e1e 70%)"; 
    }
}

function lampOff () {
    if (!isLampBroken()) {
        lamp.src = "./imagens/desligada.jpg";
        lamp.style.background = "none";
    }
}

function lampBroken () {
    if (!isLampBroken()) {
        lamp.src = "./imagens/quebrada.jpg";
        lamp.style.background = "none";
    }
}

turnOn.addEventListener("click", lampOn)
turnOff.addEventListener("click", lampOff)
lamp.addEventListener("mouseover", lampOn)
lamp.addEventListener("mouseleave", lampOff)
lamp.addEventListener("dblclick", lampBroken)



