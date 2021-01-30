const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    word: {type: String, required: true},
    definition: {type: String, required: true}
  }, {
    timestamps: true,
  });

const deckSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName:String,
  cards: [cardSchema],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Deck', deckSchema);

deckSchema.virtual('totalCards').get(function () {
    return this.cards.length();
})

deckSchema.statics.getUserDecks = async function (userId) {
  // 'this' is bound to the model (don't use an arrow function)
  // return the promise that resolves to a cart (unpaid order)
  return this.find(
    // query
    { user: userId },  
  );
};

// statics are callable on the model, not an instance (document)
deckSchema.statics.getDeck = async function (userId) {
  // 'this' is bound to the model (don't use an arrow function)
  // return the promise that resolves to a cart (unpaid order)
  return this.findOneAndUpdate(
    // query
    // { user: userId, isPaid: false },
    // update - in the case the order (cart) is upserted
    { user: userId },
    // upsert option creates the doc if it doesn't exist!
    { upsert: true, new: true }
  );
};