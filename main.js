//VARIAVEIS
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


//EVENTOS
btnTry.addEventListener('click', handleTryClick) //quando fazer o click a funcao handleTryClick é executada
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleEnter)
//funcoes callback
function handleTryClick(event) {
    event.preventDefault() //nao faça o padrao desse evento (nao envie o formulario)

    const inputNumber = document.querySelector("#inputNumber")

    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()

        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
    }

    inputNumber.value = "" //vai deixar o campo vazio
    xAttempts++ //vai aumentar 1 vez no nº de tentativas
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")//se ja tiver o hide vai remover ou ao contrario
    screen2.classList.toggle("hide")
}

function handleEnter(e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}