const { ApolloServer, gql } = require("apollo-server");

class Deck {
  cards = [];

  constructor() {
    const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    const symbols = ["♠", "♥", "♣", "♦"];
    symbols.forEach((symbol) => {
      numbers.forEach((number) => {
        this.cards.push({number: number, symbol: symbol});
      });
    });
  }

  refillDeck() {
    symbols.forEach((symbol) => {
      numbers.forEach((face) => {
        this.cards.push(face + symbol);
      });
    });
  }

  dispatchCards(size) {
    if (this.cards.length < size) {
      let leftCards = [];
      leftCards = leftCards.concat(this.cards);
      let times = leftCards.length;

      this.refillDeck();
      for (let i = 0; i < times; i++) {
        this.cards = this.cards.filter((card) => card !== leftCards[i]);
      }

      let deal = new Array(parseInt(size - times))
        .fill()
        .map(
          () =>
            this.cards.splice(parseInt(Math.random() * this.cards.length), 1)[0]
        );
      return deal.concat(leftCards);
    } else {
      return new Array(size)
        .fill()
        .map(
          () =>
            this.cards.splice(parseInt(Math.random() * this.cards.length), 1)[0]
        );
    }
  }
}

const typeDefs = gql`
    type Card {
        number: String
        symbol: String
    }
    type Query {
        cards: [Card]
        deck: [Card]
        getCards(cards: Int): [Card]
        table: [Card]
    }
    type Mutations {
        restoreCards: String
    }
`;

let deck = new Deck();
let table = deck.dispatchCards(5);

const resolvers =  {
    Query: {
        cards: () => deck.cards,
        deck: () => {
            console.log(deck);
        },
        table: () => {
            return table;
        },
        getCards: (_, {cards})=>{
            return deck.dispatchCards(cards);
        }
    },
    Mutations: {
        restoreCards: () => {
            deck = new Deck();
            table = deck.dispatchCards(5);
            return 'Done!'
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
