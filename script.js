let selectedCharacter = "cross"
let player_score = 0
let computer_score = 0

function selectZero(){
    selectedCharacter = "zero"
    clearGameField()
}

function selectCross(){
    selectedCharacter = "cross"
    clearGameField()
}

function clickEvent(canvas) {
    if(canvas.classList.length === 0) {
        canvas.classList.add(selectedCharacter)
    }
    else {
        console.log("dsa")
        return
    }
    if (checkGameStatus()) {
        console.log("YOU WIN!!!")
        document.getElementById("score-player").textContent = String(++player_score)
        clearGameField()
    }
    else
        opponentMove()
}

function opponentMove(){
    let move_status = false
    let cells = document.getElementsByTagName("canvas")
    while(!move_status){
        if (checkFieldStatus(cells)){
            clearGameField()
            return
        }
        let cell_number = Math.floor(Math.random() * 9)
        if(cells[cell_number].classList.length === 0){
            if (selectedCharacter === "cross")
                cells[cell_number].classList.add("zero")
            else
                cells[cell_number].classList.add("cross")
            move_status = true
        }
        if (checkGameStatus()) {
            console.log("You lose")
            document.getElementById("score-computer").textContent = String(++computer_score)
            clearGameField()
        }
    }
}

function checkFieldStatus(cells){
    let count_empty = 0
    for(let cell of cells){
        if(cell.classList.length === 0){
            count_empty += 1
            console.log("найден ")
        }
    }
    return count_empty === 0
}

function clearGameField(){
    let cells = document.getElementsByTagName("canvas")
    for (let cell of cells){
        if(cell.classList.length !== 0)
            cell.classList.remove(cell.classList[0])
    }
}

function checkGameStatus(){
    let cells = document.getElementsByTagName("canvas")

    if ((cells[0].classList[0] === "cross" && cells[1].classList[0] === "cross" && cells[2].classList[0]=== "cross") ||
        (cells[0].classList[0] === "zero" && cells[1].classList[0] === "zero" && cells[2].classList[0] === "zero")){
        console.log("1")
        return true
    }
    if ((cells[3].classList[0] === "cross" && cells[4].classList[0] === "cross" && cells[5].classList[0] === "cross") ||
        (cells[3].classList[0] === "zero" && cells[4].classList[0] === "zero" && cells[5].classList[0] === "zero")){
        console.log("2")
        return true
    }
    if ((cells[6].classList[0] === "cross" && cells[7].classList[0] === "cross" && cells[8].classList[0] === "cross") ||
        (cells[6].classList[0] === "zero" && cells[7].classList[0] === "zero" && cells[8].classList[0] === "zero")){
        console.log("3")
        return true
    }
    if ((cells[0].classList[0] === "cross" && cells[3].classList[0] === "cross" && cells[6].classList[0] === "cross") ||
        (cells[0].classList[0] === "zero" && cells[3].classList[0] === "zero" && cells[6].classList[0] === "zero")){
        console.log("4")
        return true
    }
    if ((cells[1].classList[0] === "cross" && cells[4].classList[0] === "cross" && cells[7].classList[0] === "cross") ||
        (cells[1].classList[0] === "zero" && cells[4].classList[0] === "zero" && cells[7].classList[0] === "zero")){
        console.log("5")
        return true
    }
    if ((cells[2].classList[0] === "cross" && cells[5].classList[0] === "cross" && cells[8].classList[0] === "cross") ||
        (cells[2].classList[0] === "zero" && cells[5].classList[0] === "zero" && cells[8].classList[0] === "zero")){
        console.log("6")
        return true
    }
    if ((cells[0].classList[0] === "cross" && cells[4].classList[0] === "cross" && cells[8].classList[0] === "cross") ||
        (cells[0].classList[0] === "zero" && cells[4].classList[0] === "zero" && cells[8].classList[0] === "zero")){
        console.log("7")
        return true
    }
    if ((cells[2].classList[0] === "cross" && cells[4].classList[0] === "cross" && cells[6].classList[0] === "cross") ||
        (cells[2].classList[0] === "zero" && cells[4].classList[0] === "zero" && cells[6].classList[0] === "zero")){
        console.log("8")
        return true
    }
    else{
        return false
    }
}
