// Part 1

// 1.

// let favNum = 13;
// let baseURL = 'http://numbersapi.com'

// async function getFact() {
//     let res = await $.getJSON(`${baseURL}/${favNum}?json`)
//     console.log(res)
// }


// 2.

// let someNums = [1,2,3,4,5]

// async function getFacts() {
//     let res = await $.getJSON(`${baseURL}/${someNums}?json`)
//     console.log(res)
// }

// 3.

// async function showFacts() {
//     const baseURL = 'http://numbersapi.com';
//     const favNum = 13;
//     let facts = [];
  
//     for (let i = 0; i < 4; i++) {
//       let res = await $.getJSON(`${baseURL}/${favNum}?json`);
//       facts.push(res.text);
//     }
  
//     const body = $('body');
//     for (let fact of facts) {
//       const p = $('<p>').text(fact);
//       body.append(p);
//     }
//   }


// Part 2

// 1.

async function drawCard(){
    let baseURL = 'https://deckofcardsapi.com/api/deck/new/draw'
    let res = await $.getJSON(`${baseURL}?json`)
    console.log(`${res.cards[0].value} of ${res.cards[0].suit}`)
}

// 2.

async function sameDeck(){
    let firstCard = await $.getJSON('https://deckofcardsapi.com/api/deck/new/draw')
    let deckId = firstCard.deck_id
    let nextCard = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw`)
    console.log(`${firstCard.cards[0].value} of ${firstCard.cards[0].suit}`)
    console.log(`${nextCard.cards[0].value} of ${nextCard.cards[0].suit}`)
}

// 3.

async function showCards() {
    let $btn = $('button')
    let $area = $('#card-area')

    let baseURL = 'https://deckofcardsapi.com/api/deck'

    let newDeck = await $.getJSON(`${baseURL}/new/shuffle`)

    $btn.show().on('click', async function() {
        console.log('Hello')
        let cardData = await $.getJSON(`${baseURL}/${newDeck.deck_id}/draw`)
        $area.append(`<p>${cardData.cards[0].value} of ${cardData.cards[0].suit} `)
    })
}

