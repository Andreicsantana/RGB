window.addEventListener('load', colors);

let root = document.querySelector(':root');


function colors(){
    let red= document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;
    let color = document.getElementById("color");
    let text = document.getElementById("text");

    text.style.color ='rgb( '+ red +' , '+ green +' ,'+ blue + ')';
    color.style.backgroundColor = 'rgb( '+ red +' , '+ green +' ,'+ blue + ')';

    document.getElementById('resultr').value =''+ red +' '; 
    document.getElementById('resultg').value = ''+ green +''; 
    document.getElementById('resultb').value = ''+ blue + '';
}


document.getElementById("red").addEventListener('onLoad', colors);
document.getElementById("green").addEventListener('onLoad', colors);
document.getElementById("red").addEventListener('onLoad',colors);
document.getElementById('resultr').addEventListener('onLoad',colors);
document.getElementById('resultg').addEventListener('onLoad',colors);
document.getElementById('resultb').addEventListener('onLoad',colors);
