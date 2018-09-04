const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const {typeDefs, resolvers} = require('./schema');

const server = new ApolloServer({ typeDefs, resolvers });

let app = express();
server.applyMiddleware({app});
const PORT = 8080;


app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
});
