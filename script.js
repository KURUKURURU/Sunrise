const gen_btn = document.querySelector('#btn-random');
const h2 = document.querySelector('.parent-generator h2');
const h3 = document.querySelector('.parent-generator h3');
const p = document.querySelector('.parent-generator p');
const bg = document.querySelector('.parent-generator');
const btn = document.querySelector('.parent-generator button');


const arr = [
  '#FF5733', '#33FF57', '#3357FF', '#F39C12', '#8E44AD','#16A085', '#E74C3C', '#2ECC71', '#3498DB', '#9B59B6',
'#1ABC9C', '#D35400', '#C0392B', '#27AE60', '#2980B9',
  '#8E44AD', '#F1C40F', '#E67E22','#2C3E50', '#7F8C8D'
];

console.log(h2);
console.log(h3);
console.log(p);

let count = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

gen_btn.addEventListener('click', ()=>{
    count++;

    let random_color1 = (getRandomInt(0, arr.length));
    let random_color2 = (getRandomInt(0, arr.length));
    let random_color3 = (getRandomInt(0, arr.length));
    let random_color4 = (getRandomInt(0, arr.length));


    if(count >= arr.length) {count = 0};
    h2.style.color = arr[random_color1];
    h3.style.color = arr[random_color2];
    p.style.color = arr[random_color3];

    bg.style.backgroundColor = arr[count];
    gen_btn.style.backgroundColor = arr[random_color4];


})