import { createGroup } from "../functions/group.js";
import { createUser, auth } from "../functions/user.js";
import { generateUserData, generateGroupData } from "../utils/data.generation.js";

export function createGroupFlow() {

    const ownerData = generateUserData();
    const createOwnerResponse = createUser(ownerData); 
    const ownerLoginResponse = auth({email: ownerData.userData.email, password: ownerData.password});
    
    const groupData = generateGroupData([createOwnerResponse.json("data")]);
    createGroup(groupData, ownerLoginResponse.json('data.token'));
}