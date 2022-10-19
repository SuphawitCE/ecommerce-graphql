const { ApolloServer, gql } = require('apollo-server');

// Schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Resolvers
const resolvers = {
  Query: {
    hello() {
      return 'Hello GraphQL';
    }
  }
};

const apolloServerRequest = {
  typeDefs,
  resolvers
};

const server = new ApolloServer(apolloServerRequest);

//  Run: node index.js
server.listen(9000).then(({ url }) => {
  console.log('Server is running:', url);
});
