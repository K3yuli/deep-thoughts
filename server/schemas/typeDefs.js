// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
// all type definitions will go in the typeDefs tagged template function
const typeDefs = gql`
    type Thought {
        _id: ID
        thoughtText: String
        createdAt: String
        username: String
        reactionCount: Int
    }
    type Query {
        thoughts: [Thought]
    }
    `;

// export the typeDefs
module.exports = typeDefs;