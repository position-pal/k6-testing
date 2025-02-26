export const smokeOptions = {
    vus: 2,               
    duration: '1m',       
    thresholds: {
      http_req_duration: ['p(95)<500'],  
      http_req_failed: ['rate<0.01'],
    },
    tags: { test_type: 'smoke' },
};

export const loadOptions = {
    stages: [
      { duration: '2m', target: 50 },    
      { duration: '5m', target: 50 },    
      { duration: '2m', target: 0 },    
    ],
    thresholds: {
      http_req_duration: ['p(95)<1000', 'p(99)<1500'],
      http_req_failed: ['rate<0.05'],
    },
    tags: { test_type: 'load' },
};

export const stressOptions = {
    stages: [
      { duration: '2m', target: 100 },   
      { duration: '5m', target: 100 },   
      { duration: '5m', target: 200 },   
      { duration: '10m', target: 200 },  
      { duration: '5m', target: 300 },   
      { duration: '10m', target: 300 },  
      { duration: '2m', target: 0 },     
    ],
    thresholds: {
      http_req_duration: ['p(95)<2000', 'p(99)<3000'], 
      http_req_failed: ['rate<0.1'],
    },
    tags: { test_type: 'stress' },
};

export function getOptions(testType) {
    switch(testType) {
      case 'smoke':
        return smokeOptions;
      case 'load':
        return loadOptions;
      case 'stress':
        return stressOptions;
      default:
        return smokeOptions;
    }
  }

export const baseUrl =  __ENV.TARGET_URL || "http://localhost:3000";


