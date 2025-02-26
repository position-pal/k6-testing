import http from 'k6/http';
import { check } from 'k6';
import {baseUrl} from "../config.js";

export function createGroup(groupData, authToken) {

    const actionRes = http.post(`${baseUrl}/api/groups`, JSON.stringify(groupData), {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        tags: { name: 'group_creation' }
    });

    check(actionRes, {
        'group created successfully': (r) => r.status === 200
    });

    return actionRes;
}

