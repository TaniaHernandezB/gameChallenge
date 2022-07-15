// starts game
function start(){
    document.querySelector('.begin-button').addEventListener('click' , function (){
        location.href = "./startgame.html";
    });
}

const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const rounds = document.querySelector('.round-num')
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
// alerts who won or if tied, and adds win to score
  if (yourWinner) incrementScore(yourScoreSpan),alert('User won round!:)')
  if (computerWinner) incrementScore(computerScoreSpan), alert('Computer won round!:(')
  if (yourWinner == computerWinner) alert('User and Computer tied! ;)')
}

// function to increment the scores for each player
function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}


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
// function to increment the scores for each player
function incrementRound(rounds) {
    rounds.innerText = parseInt(rounds.innerText) + 1;
    if (rounds == 3){
        gameOver(SELECTIONS, rounds)
        // if (yourScoreSpan === 2,3){
        //     alert('User won game!')
        // }if (yourScoreSpan === computerScoreSpan){
        //     alert('User and computer tied!')
        // }else{
        //     alert('Computer won!')
        // }
    }
}

function gameOver(SELECTIONS, rounds){
    const result = document.querySelector('.result-score');
    const reloadBtn = document.querySelector('.reload');

    if(yourScoreSpan > computerScoreSpan){
        result.style.fontSize = '2rem';
        result.innerText = 'You Won The Game'
        result.style.color = '#308D46';
    }
    else if(yourScoreSpan < computerScoreSpan){
        result.style.fontSize = '2rem';
        result.innerText = 'You Lost The Game';
        result.style.color = 'red';
    }
    else{
        result.style.fontSize = '2rem';
        result.innerText = 'Tie';
        result.style.color = 'grey'
    }
    reloadBtn.innerText = 'Restart';
    reloadBtn.style.display = 'flex'
    reloadBtn.addEventListener('click',() => {
        window.location.reload();
    })

}




  








