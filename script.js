let state_array = []
let selectedCharacter = "cross"


for (let i = 0; i < 9; i++){
    state_array.push("")
}

function selectZero(){
    selectedCharacter = "zero"

}

function selectCross(){
    selectedCharacter = "cross"
}


function clickEvent(canvas) {
    if(canvas)
    console.log(canvas.classList)
}

