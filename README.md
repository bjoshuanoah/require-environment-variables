# require-environment-variables [![Build Status](https://travis-ci.org/bjoshuanoah/require-environment-variables.svg?branch=master)](https://travis-ci.org/bjoshuanoah/require-environment-variables)


## Install

    npm install require-environment-variables --save
  
## Usage
  
    var requireEnv = require("require-environment-variables");
    requireEnv(['GOOGLEANALYTICSID', 'SSLKEY', 'SSLCERT', 'SSLCA']);

  If any of the environment variables(process.env.GOOGLEANALYTICSID) don't exist, the process exits with code 400

## Contribute

    Update and add tests to tests/**/*.spec.js
    Pull requests will verify that tests pass
