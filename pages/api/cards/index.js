import { Deck } from '../../../library/deck';

const deck = new Deck();
let table = deck.dispatchCards(5);

export default function handler(req, res) {
    res.status(200).json(table)
}
  