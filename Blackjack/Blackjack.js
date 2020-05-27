const standardDeck=[1,2,3,4,5,6,7,8,9,10,10,10]
let deck=[]
let hand=[]
const newGameButton=document.getElementById("new-game-button")
const cardsInDeck=document.getElementById("cards-in-deck")
const handValue=document.getElementById("hand-value")
const hitButton=document.getElementById("hit-button")
const newHandButton=document.getElementById("new-hand-button")
const handList=document.getElementById("hand-list")
const handEntire=document.getElementById("hand-entire")
const eventLog=document.getElementById("event-log")
const gameLogList=document.getElementById("game-log-list")
let handValueCount=0


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
  return array;
}

function handTotal() {
    handValueCount = hand.reduce((a,b)=>a+b)
    handValue.innerText=`Hand Total = ${handValueCount}`
}

function draw() {
    card=deck.pop()
    cardsInDeck.innerText=`Cards Remaining in Deck = ${deck.length}`
    hand.push(card)
    handTotal()
}

function hit() {
    clearEventLog()
    if (handValueCount>21) {
        eventLog.innerText="Bust! Please draw a new hand!"
    }else if (deck.length==0) {
        eventLog.innerText="Deck Empty!"
    } else {
    draw()
    let newCard=document.createElement("li")
    handList.appendChild(newCard)
    newCard.innerText=hand[hand.length-1]
        if (handValueCount>21) {
            eventLog.innerText="Bust!"
            lose()
        }
    }
}

function win() {
    let newLog=document.createElement("li")
    newLog.innerText="Win"
    handList.appendChild(gameLogList)
}

function lose() {
    let newLog=document.createElement("li")
    newLog.innerText="Lose"
    gameLogList.appendChild(newLog)
}

function newHand() {
    hand=[]
    handValueCount=0
    document.getElementById("hand-list").textContent=''
    hit()
    hit()
    clearEventLog()
}

function clearEventLog(){
    document.getElementById("event-log").textContent=''
}

function newGame() {
    deck=shuffle([...standardDeck])
    document.getElementById("game-log-list").textContent=''
    newHand()
    clearEventLog()
}

newGameButton.addEventListener('click',newGame)
hitButton.addEventListener("click",hit)
newHandButton.addEventListener("click",newHand)