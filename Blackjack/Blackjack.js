const standardDeck=[
    {name:'ace-hearts', value:1, image:'img link'},
    {name:'ace-spades', value:1, image:'img link'},
    {name:'ace-diamonds', value:1, image:'img link'},
    {name:'ace-clubs', value:1, image:'img link'},
    {name:'two-hearts', value:2, image:'img link'},
    {name:'two-spades', value:2, image:'img link'},
    {name:'two-diamonds', value:2, image:'img link'},
    {name:'two-clubs', value:2, image:'img link'},
    {name:'three-hearts', value:3, image:'img link'},
    {name:'three-spades', value:3, image:'img link'},
    {name:'three-diamonds', value:3, image:'img link'},
    {name:'three-clubs', value:3, image:'img link'},
    {name:'four-hearts', value:4, image:'img link'},
    {name:'four-spades', value:4, image:'img link'},
    {name:'four-diamonds', value:4, image:'img link'},
    {name:'four-clubs', value:4, image:'img link'},
    {name:'five-hearts', value:5, image:'img link'},
    {name:'five-spades', value:5, image:'img link'},
    {name:'five-diamonds', value:5, image:'img link'},
    {name:'five-clubs', value:5, image:'img link'},
    {name:'six-hearts', value:6, image:'img link'},
    {name:'six-spades', value:6, image:'img link'},
    {name:'six-diamonds', value:6, image:'img link'},
    {name:'six-clubs', value:6, image:'img link'},
    {name:'seven-hearts', value:7, image:'img link'},
    {name:'seven-spades', value:7, image:'img link'},
    {name:'seven-diamonds', value:7, image:'img link'},
    {name:'seven-clubs', value:7, image:'img link'},
    {name:'eight-hearts', value:8, image:'img link'},
    {name:'eight-spades', value:8, image:'img link'},
    {name:'eight-diamonds', value:8, image:'img link'},
    {name:'eight-clubs', value:8, image:'img link'},
    {name:'nine-hearts', value:9, image:'img link'},
    {name:'nine-spades', value:9, image:'img link'},
    {name:'nine-diamonds', value:9, image:'img link'},
    {name:'nine-clubs', value:9, image:'img link'},
    {name:'ten-hearts', value:10, image:'img link'},
    {name:'ten-spades', value:10, image:'img link'},
    {name:'ten-diamonds', value:10, image:'img link'},
    {name:'ten-clubs', value:10, image:'img link'},
    {name:'jack-hearts', value:10, image:'img link'},
    {name:'jack-spades', value:10, image:'img link'},
    {name:'jack-diamonds', value:10, image:'img link'},
    {name:'jack-clubs', value:10, image:'img link'},
    {name:'queen-hearts', value:10, image:'img link'},
    {name:'queen-spades', value:10, image:'img link'},
    {name:'queen-diamonds', value:10, image:'img link'},
    {name:'queen-clubs', value:10, image:'img link'},
    {name:'king-hearts', value:10, image:'img link'},
    {name:'king-spades', value:10, image:'img link'},
    {name:'king-diamonds', value:10, image:'img link'},
    {name:'king-clubs', value:10, image:'img link'},
]

const newGameButton=document.getElementById("new-game-button")
const cardsInDeck=document.getElementById("cards-in-deck")
const handValue=document.getElementById("hand-value")
const hitButton=document.getElementById("hit-button")
const newHandButton=document.getElementById("new-hand-button")
const handList=document.getElementById("hand-list")
const handEntire=document.getElementById("hand-entire")
const eventLog=document.getElementById("event-log")
const gameLogList=document.getElementById("game-log-list")
const dealerHandValue=document.getElementById("dealer-hand-value")
const stayButton=document.getElementById("stay-button")
const dealerHandList=document.getElementById("dealer-hand-list")
let handOver=false
let handValueCount=0
let dealerHandCountValue=0
let deck=[]
let hand=[]
let dealerHand=[]

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


function hit() {
    clearEventLog()
    if (handOver==true){
        eventLog.innerText="Please draw a new hand!"
    }
    else {
    if (deck.length==0) {
        eventLog.innerText="Deck Empty! Please start a new game"
    }
    let card=deck.pop()
    cardsInDeck.innerText=`Cards Remaining in Deck = ${deck.length}`
    hand.push(card.value)
    handTotal()
    let newCard=document.createElement("li")
    handList.appendChild(newCard)
    newCard.innerText=card.name
        if (handValueCount>21) {
            eventLog.innerText="Bust!"
            lose()
        }
    }
}

function dealerDraw() {
    let card=deck.pop()
    cardsInDeck.innerText=`Cards Remaining in Deck = ${deck.length}`
    dealerHand.push(card.value)
    dealerHandCountValue = dealerHand.reduce((a,b)=>a+b)
    dealerHandValue.innerText=`Hand Total = ${dealerHandCountValue}`
    let newCard=document.createElement("li")
    dealerHandList.appendChild(newCard)
    newCard.innerText=card.name
}

function stay() {
    if (handOver==true){
        eventLog.innerText="Please draw a new hand!"
    }
    else {
    if (handValueCount>21) {
        eventLog.innerText="Please draw a new hand!"
    }else if (deck.length==0) {
        eventLog.innerText="Deck Empty!"
    } else {
        for (let i = 0; i < 15; i++) {
            if(dealerHandCountValue<17){
                dealerDraw()
            }
        }    
    if (dealerHandCountValue>21) {
        win()
        eventLog.innerText="Dealer Busts!"
    } else if (dealerHandCountValue>handValueCount) {
        eventLog.innerText="Dealer Wins!"
        lose()
    } else {
        win()
    }
}
}
}

function win() {
    let newLog=document.createElement("li")
    newLog.innerText="Win"
    handOver=true
    gameLogList.appendChild(newLog)
}

function lose() {
    let newLog=document.createElement("li")
    newLog.innerText="Lose"
    handOver=true
    gameLogList.appendChild(newLog)
}

function newHand() {
    handOver=false
    hand=[]
    dealerHand=[]
    handValueCount=0
    dealerHandCountValue=0
    document.getElementById("hand-list").textContent=''
    document.getElementById("dealer-hand-list").textContent=''
    dealerDraw()
    hit()
    hit()
    clearEventLog()
}

function clearEventLog(){
    eventLog.textContent=''
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
stayButton.addEventListener("click",stay)