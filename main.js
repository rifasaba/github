let Imgs = ["img/00.jpg", "img/01.jpg", "img/02.jpg", "img/03.jpeg", "img/04.jpg", "img/05.jpg", "img/06.jpg"];

let imgTag = document.getElementsByTagName('img')[0];
let right = document.getElementById('right');
let left = document.getElementById('left');


let count = 0;

for(let i = 0; i <= imgTag.length; i++){
    let dot = document.createElement('p');
    let slider = document.getElementById('slider');
    slider.appendChild(dot) 
}


right.addEventListener('click', function(){
    count++
    if(count == Imgs.length){
        count = 0
        imgTag.src = Imgs[count]

    }else{
        imgTag.src = Imgs[count]
    }
})
left.addEventListener('click', function(){
    count--
    if(count < 0){
        count = Imgs.length - 1
        imgTag.src = Imgs[count]
    }else{
        imgTag.src = Imgs[count]
    }
})


// let dotP = document.querySelectorAll('p')
// for(let j = 0 ; j < imgTag.length; j++){
//     dot[j].addEventListener('click' , function(){
//         imgTag.src = Imgs[j]
//     })
// }