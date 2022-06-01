'use strict';

let index = 0;
// Lesson version:

// function colorChanger() {
//     let colors = ['red', 'green', 'yellow', 'pirple', 'black', 'white', 'blue', 'orange', 'grey'];

//     document.getElementsByTagName('body')[0].style.backgroundColor = colors[index++];

//     if (index > colors.length -1)
//     {index = 0;}
// }

// My option with random colors:

function init() {
    document.getElementById('btn').onclick = colorChanger;
}

function colorChanger() {
    let colorArr = [
        'red',
        'green',
        'yellow',
        'pirple',
        'black',
        'white',
        'blue',
        'orange',
        'grey',
        'pink',
        'indianred',
        'coral',
    ];

    document.getElementsByTagName('body')[0].style.backgroundColor =
        colorArr[Math.floor(Math.random() * colorArr.length)];

    if (index >= colorArr.length) {
        index = 0;
    }
}

window.onload = init();
