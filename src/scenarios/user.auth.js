
import {createUser, auth} from "../functions/user.js";
import { generateUserData } from "../utils/data.generation.js";

export function userAuthFlow() { 

    const user = generateUserData();
    const createResponse = createUser(user);
    const loginResponse = auth({email: user.userData.email, password: user.password});

}