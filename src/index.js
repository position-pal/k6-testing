import http from 'k6/http';
import { check } from 'k6';
import faker from "k6/x/faker";

export const options = {
    stages: [
        { duration: '30s', target: 5 },
        { duration: '1m', target: 5 },
        { duration: '30s', target: 0 },    
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'],
    },
};

export default function() {
    const BASE_URL = "http://localhost:3000"
    const user = {
        "userData": {
            "name": faker.person.firstName(),
            "surname": faker.person.lastName(),
            "email": faker.zen.email()
        },
        "password": `Password${faker.strings.digitN(8)}!`
    };

    const createRes = http.post(`${BASE_URL}/api/users/`, JSON.stringify(user), {
        headers: { 'Content-Type': 'application/json' },
        tags: { name: 'create' }
    });

    check(createRes, {
        'user created successfully': (r) => r.status === 200,
        'UUID returned': (r) => r.json('data.id') !== undefined,
    });

    const loginRes = http.post(`${BASE_URL}/api/auth/login/`, JSON.stringify({
        email: user.userData.email,
        password: user.password
    }), {
        headers: { 'Content-Type': 'application/json' },
        tags: { name: 'login' }
    });

    check(loginRes, {
        'user authenticated successfully': (r) => r.status === 200,
        'token returned': (r) => r.json('data.token') !== undefined
    });

    const token = loginRes.json('data.token');
}

