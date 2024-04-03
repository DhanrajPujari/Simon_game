let gameseq = [];

let userseq =[];

let btns =["red","green","yellow","purple"];

let start = false;

let level = 0;

let h2 = document.querySelector("h2");
let score;

let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(start == false){
        start = true;
    }
    levelUp();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
}

function levelUp(){
    userseq = [];
    level++;
    h3.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    gameseq.push(randColor);
    console.log(gameseq);
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
}
function btnPress(){
    userFlash(this);
    userColor = this.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
    console.log("user",userseq);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function checkAns(idx){
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h3.innerHTML = `Game over! Your score was <b>${level}</b> <br>Press any kay to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";   
        },250);
        score = gameseq.length;
        highScore();
        reSet();
    }
}

function reSet(){
    start = false;
    userseq = [];
    gameseq = [];
    level = 0;
}

function highScore(){
    h2.innerText = `Highest Score ${score}`;
    if(gameseq > score){
        score = gameseq.length;
    }
}

