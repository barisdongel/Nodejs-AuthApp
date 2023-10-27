
import {register, login, findUser} from "../../controllers/User.js";

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