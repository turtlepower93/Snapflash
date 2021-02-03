const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    word: { type: String, required: true },
    definition: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const deckSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    userName: String,
    cards: [cardSchema],
    hidden: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Deck", deckSchema);

deckSchema.virtual("totalCards").get(function () {
  return this.cards.length();
});

deckSchema.statics.getUserDecks = async function (userId) {
  return this.find({ user: userId });
};

deckSchema.statics.getDeck = async function (userId) {
  return this.findOneAndUpdate({ user: userId }, { upsert: true, new: true });
};
