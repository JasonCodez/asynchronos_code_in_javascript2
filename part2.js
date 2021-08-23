
   let deckBaseURL = 'https://deckofcardsapi.com/api/deck';
 
   // 1.
   let drawCard = async function() {
      let newCard = await axios.get(`${deckBaseURL}/new/draw`);
      let {suit,  value} = newCard.data.cards[0]
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
   }
 
   // 2.
      let firstCard = null;

      const drawTwoCards = async function() {
         let firstCard = await axios.get(`${deckBaseURL}/new/draw/`)
         console.log(`${firstCard.data.cards[0].value} of ${firstCard.data.cards[0].suit}`);
         console.log(`${firstCard.data.remaining} cards left`);
         let deckId = firstCard.data.deck_id;

         let secondCard = await axios.get(`${deckBaseURL}/${deckId}/draw/`)
         console.log(`${secondCard.data.cards[0].value} of ${secondCard.data.cards[0].suit}`);
         console.log(`${secondCard.data.remaining} cards left`);
         
         
      }
 
   // // 3.

      let button = document.querySelector("button");
      let deckId = null;     
      let cardArea = document.querySelector("#card-area");

      const pileOfCards = async function() {
         
         let shuffledCards = await axios.get(`${deckBaseURL}/new/shuffle/`);
         let deckId = shuffledCards.data.deck_id;
         button.style.display = "block";

         button.addEventListener("click", async function() {
            let newCard = await axios.get(`${deckBaseURL}/${deckId}/draw/`);
            let image = document.createElement("img");
            image.src = newCard.data.cards[0].image;
            let angle = Math.random() * 90 - 45;
            let randomX = Math.random() * 40 - 20;
            let randomY = Math.random() * 40 - 20;
            image.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`

            cardArea.append(image)

            if (newCard.data.remaining === 0) {
               button.style.display = "none";
            };
         })
         
         
      }

      pileOfCards();
 
   // $btn.on('click', function() {
   //   $.getJSON(`${baseURL}/${deckId}/draw/`).then(data => {
   //     let cardSrc = data.cards[0].image;
   //     let angle = Math.random() * 90 - 45;
   //     let randomX = Math.random() * 40 - 20;
   //     let randomY = Math.random() * 40 - 20;
   //     $cardArea.append(
   //       $('<img>', {
   //         src: cardSrc,
   //         css: {
   //           transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
   //         }
   //       })
   //     );
   //     if (data.remaining === 0) $btn.remove();
   //   });
   // });
