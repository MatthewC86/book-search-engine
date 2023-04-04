const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    bookId: String!
    author: [String]
    description: String!
    title: String!
    image: String!
    link: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Query {
    me: User
  }
  type Auth {
    token: ID!
    user: User
  }
  input savedBookInput {
    authors: [String]
    description: String
    bookId: String
    forSale: String
    link: String
    title: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, passowrd: String!): Auth
    saveBook(book: SavedBookInput): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
