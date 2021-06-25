import { Deck } from '../../../library/deck';

const deck = new Deck ();

export default function handler(req, res) {
    const { amount } =  req.query;
    const cards = deck.dispatchCards(parseInt(amount));
    res.status(200).json(cards)
}