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

export const baseUrl = "http://localhost:3000";

