const { gql} = require('apollo-server-express');

const typeDefs = gql`
    type Course {
        id: ID!
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
        name: String!
        body: String!
    }
    
    type Query{
        courses: [Course]
        teachers: [Teacher]
        course(id: Int): Course
        teacher(id: Int): Teacher
    }
`

const resolvers =  {
    Query: {
        courses() {
            return[
                {
                    id: 1,
                    title: "Curso 1",
                    description: "Esta es una descripcion",
                    rating:8,
                },
                {
                    id: 2,
                    title: "Curso 2",
                    description: "Esta es una descripcion",
                    rating:8,
                },
                {
                    id: 3,
                    title: "Curso 3",
                    description: "Esta es una descripcion",
                    rating:8,
                }
            ]
        },
        teachers() {
            return [
                {id:1, name: 'Julio', nationality: 'Ecuatoriana'},
                {id:2, name: 'John', nationality: 'Ecuatoriana'},
                {id:3, name: 'Jane', nationality: 'Ecuatoriana'}
            ]
        }
    },

    Course: {
        teacher(){
            return {
                id: 1,
                name: 'Camilo'
            }
        }
    }
}

module.exports = {typeDefs, resolvers };
