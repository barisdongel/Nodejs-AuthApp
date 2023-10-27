
import {register, findExample, login} from "../../controllers/Example.js";

const resolvers = {
    Query: {
        findExample
    },
    Mutation: {
        register,
        login
    }
};


export default resolvers