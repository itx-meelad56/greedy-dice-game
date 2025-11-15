
let player1CurrentScoreUI = document.getElementById('player1CurrentScoreUI')
let player1TotalScoreUI = document.getElementById('player1TotalScoreUI')
let player2CurrentScoreUI = document.getElementById('player2CurrentScoreUI')
let player2TotalScoreUI = document.getElementById('player2TotalScoreUI')

let diceSound = new Audio('./sounds/dice-sound.mp3');
let winSound = new Audio('./sounds/win-sound.mp3')

let playerName1 = document.getElementById('player1Name')
let playerName2 = document.getElementById('player2Name')
let namePrompt1 = prompt('Enter first player name')
let namePrompt2 = prompt('Enter second player name')
playerName1.textContent = namePrompt1
playerName2.textContent = namePrompt2

if (namePrompt1 == null || namePrompt1 == '') {
    playerName1.textContent = 'Player 1'
} else {
    playerName1.textContent = namePrompt1
}
if (namePrompt2 == null || namePrompt2 == '') {
    playerName2.textContent = 'Player 2'
} else {
    playerName2.textContent = namePrompt2
}

let diceImg = document.querySelector('img')

let player1 = document.querySelector('#player1')
let player2 = document.querySelector('#player2')
player1.classList.toggle('active')

let player1Turn = true
let player2Turn = false

let rollDice = document.getElementById('rollDice')
let holdDice = document.getElementById('holdDice')
let resetButton = document.getElementById('resetGame')

let player1CurrentScore = 0
let player2CurrentScore = 0
let player1TotalScore = 0
let player2TotalScore = 0

rollDice.addEventListener('click', () => {
    let randomNumber = Math.ceil(Math.random() * 6)
    diceImg.src = `./assets/${randomNumber}.png`
    diceImg.classList.add('shake');
    setTimeout(() => diceImg.classList.remove('shake'), 150);
    diceSound.currentTime = 0;
    diceSound.play();
    if (player1Turn) {
        if (randomNumber == 1) {
            player1CurrentScore = 0
            player1CurrentScoreUI.textContent = player1CurrentScore
            player1Turn = false
            player2Turn = true
            player2.classList.toggle('active')
            player1.classList.toggle('active')
            return;
        } else {
            player1CurrentScore += randomNumber
            player1CurrentScoreUI.textContent = player1CurrentScore
        }
    }
    if (player2Turn) {
        if (randomNumber == 1) {
            player2CurrentScore = 0
            player2CurrentScoreUI.textContent = player2CurrentScore
            player2Turn = false
            player1Turn = true
            player1.classList.toggle('active')
            player2.classList.toggle('active')
            return;
        } else {
            player2CurrentScore += randomNumber
            player2CurrentScoreUI.textContent = player2CurrentScore
        }
    }
})

holdDice.addEventListener('click', () => {
    if (player1Turn) {
        player1TotalScore += player1CurrentScore
        player1TotalScoreUI.textContent = player1TotalScore
        player1CurrentScore = 0
        player1CurrentScoreUI.textContent = player1CurrentScore
        player1Turn = false
        player2Turn = true
        player1.classList.toggle('active')
        player2.classList.toggle('active')

        if (player1TotalScore >= 100) {
            winSound.play()
            alert(`You Winner the Game ${playerName1.textContent}`)
            player1CurrentScore = 0
            player1CurrentScoreUI.textContent = player1CurrentScore
            player1TotalScore = 0
            player1TotalScoreUI.textContent = player1TotalScore
            player2CurrentScore = 0
            player2CurrentScoreUI.textContent = player2CurrentScore
            player2TotalScore = 0
            player2TotalScoreUI.textContent = player2TotalScore
        }
    } else {
        player2TotalScore += player2CurrentScore
        player2TotalScoreUI.textContent = player2TotalScore
        player2CurrentScore = 0
        player2CurrentScoreUI.textContent = player2CurrentScore
        player2Turn = false
        player1Turn = true
        player1.classList.toggle('active')
        player2.classList.toggle('active')
        if (player2TotalScore >= 100) {
            winSound.play()
            alert(`You Winner the Game ${playerName2.textContent}`)
            player2CurrentScore = 0
            player2CurrentScoreUI.textContent = player2CurrentScore
            player2TotalScore = 0
            player2TotalScoreUI.textContent = player2TotalScore
            player1CurrentScore = 0
            player1CurrentScoreUI.textContent = player1CurrentScore
            player1TotalScore = 0
            player1TotalScoreUI.textContent = player1TotalScore
        }
    }
})


resetButton.addEventListener('click', () => {
    player1CurrentScore = 0
    player1CurrentScoreUI.textContent = player1CurrentScore
    player2CurrentScore = 0
    player2CurrentScoreUI.textContent = player2CurrentScore
    player1Turn = true
    player2Turn = false
    player1TotalScore = 0
    player1TotalScoreUI.textContent = player1TotalScore
    player2TotalScore = 0
    player2TotalScoreUI.textContent = player2TotalScore

    playerName1 = document.getElementById('player1Name')
    playerName2 = document.getElementById('player2Name')
    namePrompt1 = prompt('Give Player name first')
    namePrompt2 = prompt('Give Player name second')
    playerName1.textContent = namePrompt1
    playerName2.textContent = namePrompt2
    if (namePrompt1 == null || namePrompt1 == '') {
        playerName1.textContent = 'Player 1'
    } else {
        playerName1.textContent = namePrompt1
    }
    if (namePrompt2 == null || namePrompt2 == '') {
        playerName2.textContent = 'Player 2'
    } else {
        playerName2.textContent = namePrompt2
    }
    player1.classList.add('active')
    player2.classList.remove('active')
})
