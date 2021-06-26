const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
  type Mutation {
    addBook(title: String, author: String): Book
    removeLastBook(title: String, author: String): Book
  }
`;
const books = [
  { title: "The Awakening", author: "Kate Chopin" },
  { title: "City of Glass", author: "Paul Auster" },
];
const resolvers = {
  Query: { books: () => books },
  Mutation: {
    addBook: (_, args) => {
      books.push(args);
      return args;
    },
    removeLastBook: (_, args) => {
        const deleted = books.slice(-1)[0]
        books.pop();
      return deleted;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
