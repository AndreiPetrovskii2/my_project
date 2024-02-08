var donate = document.getElementById('donate');
var money = document.getElementById('money_donate');
var body = document.getElementById('dark');
var header = document.getElementById('header');
donate.addEventListener('click',function(){
    money.style ='display:block;position: fixed;';
    body.style = 'background-color: #8C92AC;opacity: 30%;';
    header.style = 'background-color: #8C92AC;opacity: 30%;';
})
