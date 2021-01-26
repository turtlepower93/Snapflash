import sendRequest from './send-request';

const BASE_URL = 'api/decks';

// get all decks from mongoose documents
export function getAll() {
    return sendRequest(BASE_URL);
}