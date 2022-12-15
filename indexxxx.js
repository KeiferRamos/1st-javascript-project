let goalEL = document.getElementById("goal-el").style.color = "blue";
let achieveEL = document.getElementById("achieve-el")
let congratsEL = document.getElementById("congrats-el")
let count = 0

function add(){
    count = count + 300
    achieveEL.innerText = "achieved:" + count + "ml"
    if (count >= 3000){
        congratsEL.textContent = "Congrats you've done a great job"
    }else if (count >= 2100){
        congratsEL.textContent = "you're almost there you got it!"
    }
}

function subtract(){
    count = count- 300
    achieveEL.innerText = "achieved:" + count + "ml"
    if (count >= 3000){
        congratsEL.textContent = "Congrats you've done a great job"
    }else if (count >= 2100){
        congratsEL.textContent = "you're almost there you got it!"
    }else {
        congratsEL.innerText = "You need to drink water!"
    }
}




