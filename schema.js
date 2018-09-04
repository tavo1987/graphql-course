const { gql} = require('apollo-server-express');

const typeDefs = gql`
    type Course {
        id: ID!,
        title: String!
        description: String!
        teacher: Teacher
        rating: Int
        comments: [Comment]
    }
    
    type Teacher {
        id: ID!
        name: String!
        nationality: String!
        gender: Gender
        courses: [Course]
    }
    
     enum Gender {
        MALE
        FEMALY
    }
    
    type Comment {
        id: ID!
        name: String!,
        body: String!
    }
    
    type Query{
        courses: [Course]
        teachers: [Teacher]
        course(id: Int): Course
        teacher(id: Int): Teacher
    }
`;

module.exports = typeDefs;
