
import { gql } from "apollo-server-express";

const typeDefs = gql`
    
    scalar Object
    scalar Date
   
    type Examples{
        id:ID
        name:String
        surname:String
        createdAt:Date
        updatedAt:Date
    }

    type Query {
        findExample: [Examples]
    }
    
    type Mutation {
        register(name: String!, email: String!, password: String!): Object
        login(email: String!, password: String!): Object
    }
`;

export  default  typeDefs