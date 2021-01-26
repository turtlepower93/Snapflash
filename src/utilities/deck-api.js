import sendRequest from './send-request';

const BASE_URL = 'api/decks';

// get all decks from mongoose documents
export function getAll() {
    return sendRequest(BASE_URL);
}

// send deckData to mongoose to create a new deck document
export function createDeck(deckData) {
    return sendRequest(BASE_URL, "POST", deckData)
}

export function updateDeck(deck) {
    return sendRequest(`${BASE_URL}/${deck._id}`, "PUT", deck);
}