# K6 testing repository for the Position Pal project

Here are collected the various smoke/load/stress tests for the Position Pal project. These are written in Javascript and run using the K6 testing tool suite.

## Installation
For running the test you need build the k6 executable along with the k6 faker extension. For doing this is necessary to use the xk6 builder tool, for more information about this tool you can visit the [xk6 repository](https://github.com/grafana/xk6).

Then generate the extension using the following command:

```
xk6 build --with github.com/grafana/xk6-faker@latest 
```

## Running the tests
Is possible to run the tests using the following command:

```
k6 run src/index.js -e TARGET_URL=https://url.of.pp:<port> -e TEST_TYPE=smoke|load|stress
```

## Test types
- Smoke: This test is used to check the basic functionality of the application.
- Load: This test is used to check the performance of the application under normal conditions.
- Stress: This test is used to check the performance of the application under high load conditions.

