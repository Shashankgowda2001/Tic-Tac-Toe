let boxes = document.querySelectorAll(".box");
let isTrunO = true;
let newGmBtn = document.querySelector("#new_game_btn");
let newGmBtnDraw = document.querySelector("#new_game_btn_draw");
let resetBtn = document.querySelector("#reset");
let msgCont = document.querySelector(".msg_conatiner");
let msgContDraw = document.querySelector(".msg_conatiner_draw");
let msg = document.querySelector("#msg");
let count = 0;
let isWinner = false;

let patterns = [[0,1,2],
                [0,3,6],
                [0,4,8],
                [1,4,7],
                [2,5,8],
                [2,4,6],
                [3,4,5],
                [6,7,8],
            ]

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        if(isTrunO) {
            box.innerText = "O";
            box.style.color = 'Red';
            isTrunO = false;
        } else {
            box.innerText = "X";
            box.style.color = 'Black';
            isTrunO = true;
        }
        box.disabled = true;
        count++;
        checkwinners();
        if(count>=9 && isWinner===false) {
            msgContDraw.classList.remove("hide");
            isWinner = true;
            count=0;
        }
    })
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgCont.classList.remove("hide");
    isWinner = false;
    count =0;
}

const disableButtons = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const EnableButtons = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}

checkwinners = ()=>{
    for(let pattern of patterns){
            let pos0 = boxes[pattern[0]].innerText;
            let pos1 = boxes[pattern[1]].innerText;
            let pos2 = boxes[pattern[2]].innerText;

            if(pos0 != "" && pos1 != "" && pos2 != ''){
                if(pos0 == pos1 && pos1==pos2){
                    disableButtons();
                    showWinner(pos0);
                }   
                    
                
            }
        }
            
}

let resetGame = () => {
    isTrunO = true;
    EnableButtons();
    msgCont.classList.add("hide");
    msgContDraw.classList.add("hide");
    count = 0;
}

resetBtn.addEventListener("click",resetGame);
newGmBtn.addEventListener("click",resetGame);
newGmBtnDraw.addEventListener("click",resetGame);