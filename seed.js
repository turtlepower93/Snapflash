require('dotenv').config();
require('./config/database');

const deck = require('./models/deck');

(async function() {

  await deck.deleteMany({});
  const decks = await deck.create([
    {name: 'Javascript Functions',
     description:'Functions on functions'},
  ]);

  console.log(decks)

  process.exit();

})();