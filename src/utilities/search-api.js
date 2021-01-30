import sendRequest from './send-request';

const BASE_URL = 'api/search';

// get all decks from mongoose documents
export function getAllOtherDecks() {
    return sendRequest(BASE_URL);
}