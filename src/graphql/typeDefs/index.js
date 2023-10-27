
import { gql } from "apollo-server-express";

const typeDefs = gql`
    
    scalar Object
    scalar Date
   
    type findUser{
        id:ID
        name:String
        email:String
        password:String
        createdAt:Date
        updatedAt:Date
    }

    type Query {
        findUser: [findUser]
    }
    
    type Mutation {
        register(name: String!, email: String!, password: String!): Object
        login(email: String!, password: String!): Object
    }
`;

export  default  typeDefs