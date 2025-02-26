
import {createUser, auth} from "../functions/user.js";
import { generateUserData } from "../utils/data.generation.js";

export function userAuthFlow() { 

    const user = generateUserData();
    createUser(user);
    auth({email: user.userData.email, password: user.password});
}

