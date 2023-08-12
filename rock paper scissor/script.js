function computers(params) {
  let computerMove= Math.floor(Math.random() * 3) + 1;
   if (computerMove === 1) {
    return 'rock'
   }else if (computerMove === 2){
    return 'paper'
   }else{
    return 'scissor'
   }
}let wins = 0;
let loses = 0;
let draws = 0;
const score = [wins,loses,draws]
const body = document.body
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')
const scores = document.querySelector('.score')
const result = document.querySelector('.result')
const div = document.querySelector('div')
let playersMove ;
rock.addEventListener('click', e => {
  playersMove = 'rock'
  let computerSelection = computers()
  if (computerSelection === 'rock') {
    result.textContent = 'you played rock and computer played rock so its draw'
    ++score[2]
  }else if(computerSelection === 'paper'){
    result.textContent =  'you played rock and computer played paper so its loss'
    ++score[1]
  }else if (computerSelection === 'scissor'){
    result.textContent = 'you played rock and computer played scissor so its a win'
    ++score[0]
  }
   scored()
rounds()
removeWinAndHelp()
})
paper.addEventListener('click', e => {
  playersMove = 'paper'
  let computerSelection = computers()
  if (computerSelection === 'rock') {
    result.textContent = 'you played paper and computer played rock so its win'
    ++score[0]
  }else if(computerSelection === 'paper'){
    result.textContent =  'you played paper and computer played paper so its draw'
    ++score[2]
  }else if (computerSelection === 'scissor'){
    result.textContent = 'you played paper and computer played scissor so its a loss'
    ++score[1]
  }
scored()
rounds()
removeWinAndHelp()
})
scissor.addEventListener('click', e => {
  playersMove = 'scissor'
  let computerSelection = computers()
  if (computerSelection === 'rock') {
    result.textContent = 'you played scissor and computer played rock so its lose'
    ++score[1]
  }else if(computerSelection === 'paper'){
    result.textContent =  'you played scissor and computer played paper so its win'
    ++score[0]
  }else if (computerSelection === 'scissor'){
    result.textContent = 'you played scissor and computer played scissor so its a draw'
    ++score[2]
  }
 scored()
rounds()
removeWinAndHelp()


})
function rounds() {
  if (score[1] === 5) {
 scoreBoard()
 scores.textContent=`wins${score[0] = 0}losses${score[1] = 0} draws${score[2] = 0}`
    winner.textContent = 'computers won you lost the best'
  }else if(score[0] ===5){
     scoreBoard()   
    winner.textContent = 'you won nice now play another round';
   
  }else if(score[2] === 5){ 
    scoreBoard()
   winner.textContent = 'its draw nobody won badluck'
  }
}
function scoreBoard() {
  const winner = document.createElement('span')
  div.append(winner)
  winner.setAttribute('id','winner')
  scores.textContent=`wins${score[0] = 0}losses${score[1] = 0} draws${score[2] = 0}`
  const help = document.createElement('span')
  div.append(help)
 help.textContent = 'if you wana play again press any button'
 help.setAttribute('id','help')
}
function removeWinAndHelp() {
  const help  = document.getElementById('help')
const winner = document.getElementById('winner')
if (score[1] === 1 || score[2] === 1 || score[0] === 1) {
  winner.remove()
  help.remove()
}}
function scored(){
  scores.textContent=`wins${score[0]} losses${score[1]} draws${score[2]}`
}