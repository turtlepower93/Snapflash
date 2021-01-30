import sendRequest from './send-request';

const BASE_URL = 'api/decks';

// get all decks from mongoose documents
export function getAll() {
    return sendRequest(BASE_URL);
}

export function addCards(deck, cardsData) {
    return sendRequest(`${BASE_URL}/${deck._id}/addCards`, 'PUT', cardsData)
}

// send deckData to mongoose to create a new deck document
export function createDeck(deckData) {
    return sendRequest(BASE_URL, "POST", deckData);
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
