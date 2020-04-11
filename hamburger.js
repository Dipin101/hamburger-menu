const button = document.querySelector('.hamburger')
const btn = document.querySelector('.hamburger1')
let menuOpen = false

//without using callback
button.addEventListener('click', hamburger)

function hamburger() {
    if(!menuOpen){
        button.classList.add('open')
        menuOpen = true
    }else {
        button.classList.remove('open')
        menuOpen = false
    }
}

// button.addEventListener('click', () => {
//     if(!menOpen) { //in case true
//         button.classList.add('open')
//         menuOpen = true
//     } else {
//         button.classList.remove('open')
//         menuOpen = false
//     }
// })


btn.addEventListener('click', burgermenu)

function burgermenu() {
    if(!menuOpen) {
        btn.classList.add('open')
        menuOpen = true
    } else {
        btn.classList.remove('open')
        menuOpen = false
    }
}