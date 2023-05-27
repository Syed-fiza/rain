const button=document.querySelector("button");
const body=document.querySelector("body");
const color=['violet','indigo','blue','green','yellow','orange','red'];

body.style.backgroundcolor='pink';

document.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundcolor=color[colorIndex];

});
