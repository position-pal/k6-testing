import http from 'k6/http';
import { check } from 'k6';
import {baseUrl} from "../config.js";

export function createUser(userData) {

    const createRes = http.post(`${baseUrl}/api/users/`, JSON.stringify(userData), {
        headers: { 'Content-Type': 'application/json' },
        tags: { name: 'create' }
    });


    check(createRes, {
        'user created successfully': (r) => r.status === 200,
        'UUID returned': (r) => r.json('data.id') !== undefined,
    });

    return createRes;
}


export function auth(loginData) {

    const loginRes = http.post(`${baseUrl}/api/auth/login/`, JSON.stringify(loginData), {
        headers: { 'Content-Type': 'application/json' },
        tags: { name: 'login' }
    });

    check(loginRes, {
        'user authenticated successfully': (r) => r.status === 200,
        'token returned': (r) => r.json('data.token') !== undefined
    });

    return loginRes;
}