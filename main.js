const  words = ["Word" , "letters" , "read" , "red" , "learn", "hello" , "exemple","World","finish"];
const  title = document.querySelector('.output h1');
const input  = document.querySelector('.input input')
const timeCount = document.querySelector('.input span');
const timediv = document.querySelector('.input .time-count');
const start = document.querySelector('.input button');
const score = document.querySelector('.input h2');
const Over = document.querySelector('#time-over');
const finish = document.querySelector('#finish');
const standardlevel = document.querySelector(".standard");
let changeWordTime;
let i;
let standardTime;
//
standardlevel.addEventListener('click',(e)=>{
    const level = e.target;
    if(level.innerHTML === "Hard"){
        i=3;
        standardTime = 3;
        document.querySelector('.standard').style.display = "none";
    }else if(level.innerHTML == "Medium"){
        i=5;
        standardTime = 5;
        document.querySelector('.standard').style.display = "none";
    }else if(level.innerHTML == "Easy"){
        i=7;
        standardTime = 7;
        document.querySelector('.standard').style.display = "none";
    }
    let lvl = document.querySelector('.time-count h3');
    lvl.innerHTML = level.innerHTML;
})
//
start.onclick = function () {
    start.style.display = 'none';
    input.focus();
    timer();
    changeWord();
}
//
function changeWord(){
    //check if the array contains a word for display
    if (words.length != 0) {
        let randWord = words[Math.floor(Math.random() * words.length)];
        title.innerHTML =randWord;
        //Remove the word after displaying it from the Array 
        words.splice(words.indexOf(randWord),1);
    }else{
        finish.style.display ='block';
        clearInterval(changeWordTime);
        input.oninput = ()=>{false};
    }
}
function timer() {
    changeWordTime = setInterval(()=>{
        timeCount.innerHTML=i;
        if (i==0) {
            input.oninput = ()=> {false};
            i=standardTime;
            clearInterval(changeWordTime);
            Over.style.display = 'block';
        }
        i--;
    },1000)
}
//
input.oninput = function(){
    if((input.value.toLowerCase()) == (title.innerHTML.toLowerCase())){
        score.innerHTML++;
        input.value= ''; //type a new word
        timeCount.innerHTML=00;//Restart the timer to type a new word
        i=standardTime; //Restart the timer to type a new word
        changeWord();
    }
}
//
input.onpaste = function (){
    return false;
}