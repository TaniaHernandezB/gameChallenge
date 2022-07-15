// starts game
function start(){
    document.querySelector('.begin-button').addEventListener('click' , function (){
        location.href = "startgame.html";
    });
}

const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const rounds = document.querySelector('[data-round-num]')
// sets game logic
const SELECTIONS = [
  {
    name: 'Rock',
    beats: 'Scissors'
  },
  {
    name: 'Paper',
    beats: 'Rock'
  },
  {
    name: 'Scissors',
    beats: 'Paper'
  }
]

// allows for buttons to work and processes click for the selected choice
selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})

function makeSelection(selection) {
// calls computer choice
  const computerSelection = randomSelection()
// plays function that decides winner for the user selection and computer selection
  const yourWinner = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)

  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, yourWinner)
// alerts who won or if tied, adds win to score, and adds to round num
  if (yourWinner) incrementScore(yourScoreSpan),alert('User won round!:)'), incrementRound(rounds)
  if (computerWinner) incrementScore(computerScoreSpan), alert('Computer won round!:('), incrementRound(rounds)
  if (yourWinner == computerWinner) alert('User and Computer tied! ;)'), incrementRound(rounds)

}

// function to increment the scores for each player
function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

// adds the user and comp selection to the displayed list 
function addSelectionResult(selection, winner) {
  const div = document.createElement('div')
  div.innerText = selection.name
  div.classList.add('result-selection')
  if (winner) div.classList.add('winner')
  finalColumn.after(div)
}
// code to decipher winning choice
function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name
}
// code that develops computer choice through a randomization of numbers
function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}
// function to increment the round number after each round
function incrementRound(numRound) {
    numRound.innerText = parseInt(numRound.innerText) + 1;
    // end after 3 rounds
    // endNum = '3';
    // if (numRound  == endNum){
    //     gameOver( yourScoreSpan, computerScoreSpan)
    // }
}

// function gameOver(yourScoreSpan, computerScoreSpan){
//     if (yourScoreSpan>computerScoreSpan){
//         alert('You beat the ultimate master!')
//     }if (yourScoreSpan<computerScoreSpan){
//         alert('You lost to the ultimate master!')
//     }else{
//         alert('Tied')
//     }
// }

start()




  








