require('dotenv').config();
require('./config/database');

const deck = require('./models/deck');

(async function() {

  await deck.deleteMany({});
  // const decks = await deck.create([
  //   {
  //   name: 'Javascript Functions',
  //   description:'Functions on functions',
  //   cards: 
  //   [{
  //       word: 'parseInt()',
  //       definition: 'converts a string to an integer'
  //   }    
  //   ]},
  //   {
  //     name: 'TEST NAME',
  //     description:'TEST DESCRIPTION',
  //     cards: 
  //     [{
  //       word: 'FIRST CARD WORD',
  //       definition: 'FIRST CARD DEFINITION'
  //     },{
  //       word: 'SECOND CARD WORD',
  //       definition: 'SECOND CARD DEFINITION'
  //     },{
  //       word: 'THIRD CARD WORD',
  //       definition: 'THIRD CARD DEFINITION'
  //     }      
  //     ]}  
// ]);

  // console.log(decks)

  process.exit();

})();