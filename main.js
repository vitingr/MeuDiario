/* FUNÇÃO ATIVAR NAVBAR LATERAL */

const list = document.querySelectorAll('.list');

list.forEach(item => {
    item.onclick = () => {
        list.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    }
})

/* OCULTAR ou MOSTRAR MENU*/

let menuToggle = document.querySelector('.toggle')
let nav = document.querySelector('.nav')
menuToggle.onclick = function() {
    menuToggle.classList.toggle('active')
    nav.classList.toggle('active')
}

/* FUNÇÃO TEMA ESCURO */

let escuro = document.querySelector('.temaescuro')
escuro.onclick = function() {
    document.body.classList.toggle('dark')
    escuro.classList.toggle('ativar')
}

/* REDIRECIONAR COM BOTÃO */

let botao = document.querySelector('.button')
botao.onclick = function() {
    window.location.href = 'relato1.html'
}

/* FUNÇÃO HORÁRIO */

function hour() {
    let horario = new Date()
    let horas = horario.getHours()
    let minutos = horario.getMinutes()
    if (horas > 6 && horas <= 19) {
        console.log(`Agora são ${horas}:${minutos}, por isso resolvemos ativar o tema claro!`)
    } else {
        if (horas <= 6 && horas > 19) {
            console.log(`Agora são ${horas}:${minutos}, por isso resolvemos ativar o tema escuro!`)
        }
    }
}

/* FUNÇÃO RELÓGIO */

function relogio() {
    let data = new Date()
    let hour = data.getHours()
    let minutes = data.getMinutes()
    let tempo_total = `${hour}:${minutes}`
    var tempo = document.querySelector('.horario')
    tempo.innerHTML = tempo_total
}
setInterval(relogio, 500)
