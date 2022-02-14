const container=document.querySelector('.container');
const text=document.querySelector('#text');

// here total time is 7.5s
const totalTime=7500;
const breatheTime=(totalTime/5)*2; //1.5*2
const holdTime=totalTime/5;  //1.5

breatheAnimation()
//function to constantly run
function breatheAnimation(){
text.innerHTML='Breathe In!';
//for making circle shrink and extend
container.className='container grow';

setTimeout(()=>{
  text.innerText='Hold';

  setTimeout(()=>{
text.innerText='Breathe Out!';
//for shrink class
container.className='container shrink';

  },holdTime)
},breatheTime)
}

//function to run after every totalTime

setInterval(breatheAnimation, totalTime);