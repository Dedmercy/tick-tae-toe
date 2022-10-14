let selectedCharacter = "cross"

function selectZero(){
    selectedCharacter = "zero"
    clearGameField()
}

function selectCross(){
    selectedCharacter = "cross"
    clearGameField()
}

function clickEvent(canvas) {
    if(canvas.classList.length === 0)
        canvas.classList.add(selectedCharacter)
    else
        return
    if (checkGameStatus())
        console.log("YOU WIN!!!")
    else
        opponentMove()
}

function opponentMove(){
    let move_status = false
    let cells = document.getElementsByTagName("canvas")
    do{
        let cell_number = Math.floor(Math.random() * 9)
        if(cells[cell_number].classList.length === 0){
            if (selectedCharacter === "cross")
                cells[cell_number].classList.add("zero")
            else
                cells[cell_number].classList.add("cross")
            move_status = true
        }
        else
            continue
        if (checkGameStatus())
            console.log("You lose")

    }while(!move_status)
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
        return true
    }
    if ((cells[3].classList[0] === "cross" && cells[4].classList[0] === "cross" && cells[5].classList[0] === "cross") ||
        (cells[3].classList[0] === "zero" && cells[4].classList[0] === "zero" && cells[5].classList[0] === "zero")){
        return true
    }
    if ((cells[6].classList[0] === "cross" && cells[7].classList[0] === "cross" && cells[8].classList[0] === "cross") ||
        (cells[6].classList[0] === "zero" && cells[7].classList[0] === "zero" && cells[8].classList[0] === "zero")){
        return true
    }
    if ((cells[0].classList[0] === "cross" && cells[3].classList[0] === "cross" && cells[6].classList[0] === "cross") ||
        (cells[0].classList[0] === "zero" && cells[3].classList[0] === "zero" && cells[6].classList[0] === "zero")){
        return true
    }
    if ((cells[1].classList[0] === "cross" && cells[4].classList[0] === "cross" && cells[7].classList[0] === "cross") ||
        (cells[1].classList[0] === "zero" && cells[4].classList[0] === "zero" && cells[7].classList[0] === "zero")){
        return true
    }
    if ((cells[2].classList[0] === "cross" && cells[5].classList[0] === "cross" && cells[8].classList[0] === "cross") ||
        (cells[2].classList[0] === "zero" && cells[5].classList[0] === "zero" && cells[8].classList[0] === "zero")){
        return true
    }
    if ((cells[1].classList[0] === "cross" && cells[4].classList[4] === "cross" && cells[8].classList[0] === "cross") ||
        (cells[1].classList[0] === "zero" && cells[4].classList[4] === "zero" && cells[8].classList[0] === "zero")){
        return true
    }
    if ((cells[1].classList[2] === "cross" && cells[4].classList[4] === "cross" && cells[6].classList[0] === "cross") ||
        (cells[1].classList[2] === "zero" && cells[4].classList[4] === "zero" && cells[6].classList[0] === "zero")){
        return true
    }
    else{
        return false
    }
}
