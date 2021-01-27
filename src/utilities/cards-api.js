import sendRequest from './send-request';

const BASE_URL = 'api/decks';

// get all decks from mongoose documents
export function getAll() {
    return sendRequest(BASE_URL);
}

// send deckData to mongoose to create a new deck document
export function createDeck(cardData) {
    return sendRequest(`${BASE_URL}/${deck._id}/cards`, "POST", cardData);
}

export function updateDeck(deck) {
    return sendRequest(`${BASE_URL}/${deck._id}`, "PUT", deck);
}

export function showDeck(deck) {
    return sendRequest(`${BASE_URL}/${deck._id}`, "GET", deck);
}

export function deleteDeck(deck) {
    return sendRequest(`${BASE_URL}/${deck._id}`, "DELETE");
}