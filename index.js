const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');

const server = new ApolloServer({ typeDefs });

let app = express();
server.applyMiddleware({app});
const PORT = 5678;


app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
});