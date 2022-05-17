const bChoice = document.getElementById('BChoice')
const uChoice = document.getElementById('UChoice')
const rText = document.getElementById('Result')

let uInput
let bInput

const posChoices = document.getElementsByClassName('BtnRPS')
Array.from(posChoices).forEach(posChoice => posChoice.addEventListener('click', (e) => {
    switch(e.target.id){
        case 'BtnR':
            uInput = 1
            uChoice.innerHTML = "Your choice: Rock"
            break
        case 'BtnP':
            uInput = 2
            uChoice.innerHTML = "Your choice: Paper"
            break
        case 'BtnS':
            uInput = 3
            uChoice.innerHTML = "Your choice: Scissors"
            break
        }
    genBotChoice()
}))

function genBotChoice(){
    const rndNum = Math.floor(Math.random() * 3) + 1

    switch (rndNum){

        case 1:
            bChoice.innerHTML = "Computer's choice: Rock"
            break
        case 2:
            bChoice.innerHTML = "Computer's choice: Paper"
            break
        case 3:
            bChoice.innerHTML = "Computer's choice: Scissors"
            break
    }
    bInput = rndNum
    getResult()
}

function getResult(){
    console.log(uInput, bInput);
    if (bInput === uInput){rText.innerHTML = "It's a draw !"}
    if (bInput === 1 && uInput === 2){rText.innerHTML = "Result: You won !"}
    if (bInput === 1 && uInput === 3){rText.innerHTML = "Result: You lost !"}
    if (bInput === 2 && uInput === 3){rText.innerHTML = "Result: You won !"}
    if (bInput === 2 && uInput === 1){rText.innerHTML = "Result: You lost !"}
    if (bInput === 3 && uInput === 1){rText.innerHTML = "Result: You won !"}
    if (bInput === 3 && uInput === 2){rText.innerHTML = "Result: You lost !"}
}