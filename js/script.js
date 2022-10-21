let lua = document.getElementById('moon')
let estrelas = document.getElementById('stars')
let montanhas = document.getElementById('mountains_behind')
let texto = document.getElementById('texto')
let montanhas_frente = document.getElementById('mountains_front')
let btn = document.getElementById('btn')
let sec = document.getElementById('sec')
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    estrelas.style.left = value * 0.25 + 'px';
    lua.style.top = value * 1.05 + 'px';
    montanhas.style.left = value * -0.05 + 'px';
    montanhas_frente.style.top = value * 0 + 'px';
    texto.style.marginRight = value * 4 + 'px';
    texto.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})
