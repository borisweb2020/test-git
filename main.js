const $content = document.getElementById('content');
const $button  = document.querySelector('.button');

function getRandom(maxValue){
    return Math.floor(Math.random() * maxValue);
}

const anyObject = {
    name: 'Viktor',
    surname: 'Ivanov',
    age: 40,
    sex: 'male',
    position: 5
}

for(let key in anyObject){
    console.log(anyObject[key]);
}

const arr = ['green', 'red', 'yellow', 5]

for(let i of arr){
    console.log(i);
}
