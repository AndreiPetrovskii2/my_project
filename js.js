var donate = document.getElementById('donate');
var money = document.getElementById('money_donate');
var body = document.getElementById('dark');
var header = document.getElementById('header');
let img_escape = document.getElementById('img_escape');
let input = document.querySelector('input');
let button_donate = document.getElementById('button_donate');
donate.addEventListener('click',function(){
    money.style ='display:block;position: fixed;';
    body.style = 'background-color: #8C92AC;opacity: 5%;';
    header.style = 'background-color: #8C92AC;opacity: 5%;';
})
img_escape.addEventListener('click', function(){
    money.style ='display:none;';
    body.style = 'opacity: 100%;';
    header.style = 'opacity: 100%;';
})
button_donate.addEventListener('click', function(){
    alert('Спасибо что перечислили ' + input.value + ' руб')
})