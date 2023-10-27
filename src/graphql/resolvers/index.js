
import {register, login, findUser} from "../../controllers/Auth.js";

const resolvers = {
    Query: {
        findUser
    },
    Mutation: {
        register,
        login
    }
};


export default resolvers