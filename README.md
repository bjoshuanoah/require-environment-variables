# require-environment-variables [![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

## Install

js
    
    npm install require-environment-variables --save

ts

    yarn add require-environment-variables

## Usage

js
    
    const requireEnv = require("require-environment-variables");
    requireEnv(['GOOGLEANALYTICSID', 'SSLKEY', 'SSLCERT', 'SSLCA']);

ts

    import requireEnv from 'require-environment-variables'
    requireEnv(['GOOGLEANALYTICSID', 'SSLKEY', 'SSLCERT', 'SSLCA']);

  If any of the environment variables(process.env.GOOGLEANALYTICSID) don't exist, the process exits with code 400

## Contribute

    Update and add tests to tests/**/*.spec.ts
    Pull requests will verify that tests pass
