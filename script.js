let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const gencompchoice = ()=>{
    const opts = ["rock","paper","scissor"];
    const randomidx = Math.floor(Math.random() * 3);
    return opts[randomidx];
}

const drawgame=()=>{
     msg.innerText="Game Was A draw. Play Again";
     msg.style.backgroundColor="#081b31";

}

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const showwinner=(userwin,userch,compch)=>{
if(userwin){
    userScore++;

    userscorepara.innerText=userScore;
    msg.innerText=`You Win! Your ${userch} beats ${compch}`;
    msg.style.backgroundColor="green";
}
else{
    compScore++;
        compscorepara.innerText=compScore;
     msg.innerText=`You Lose! ${compch} beats your ${userch}`;
     msg.style.backgroundColor="red";

}
}

//user choice
const playgame =(userch) => {

//comp choice
const compch=gencompchoice();

if(userch === compch){
    drawgame();
}
else{
    let userwin=true;
    if(userch==="rock"){
        userwin=compch==="paper"? false :true;
    }
    else if(userch==="paper"){
        userwin=compch==="scissor"?false :true;
    }
    else{
      userwin=compch==="rock"?false : true;
    }
    showwinner(userwin,userch,compch);
}

}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userch=choice.getAttribute("id");
        
         playgame(userch);

    })
}) 