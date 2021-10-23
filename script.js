let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let bodyBack=document.getElementById('body');

//for change color 

function gradiant(){
    bodyBack.style.background=`linear-gradient(to right,${color1.value},${color2.value})`;
}


//calling gradiant function

color1.addEventListener('input',gradiant);
color2.addEventListener('input',gradiant);
