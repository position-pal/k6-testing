import { getOptions } from "./config.js";
import { createGroupFlow } from "./scenarios/group.create.js"

export default createGroupFlow;

const testType = __ENV.TEST_TYPE || 'smoke';
export const options = getOptions(testType);
