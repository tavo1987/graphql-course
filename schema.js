const { gql} = require('apollo-server-express');

const typeDefs = gql`
    type Course {
        id: ID!,
        title: String!
    }
    
    type Query{
        courses: [Course]
    }
`;

module.exports = typeDefs;
