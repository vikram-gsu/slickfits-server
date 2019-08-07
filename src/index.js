require('dotenv').config({path: 'variables.env'});
const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Mutation,
    Query
  },
  context: request => ({
    ...request,
    prisma
  })
});

server.start((details) => console.log(`Server is running on port ${details.port}`))
