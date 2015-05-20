Express middleware that blocks referral spam, and sends a 404. 


# Install

    npm install require-environment-variables --save
  
# Usage
  
    var requireEnv = require("require-environment-variables");
    requireEnv(['GOOGLEANALYTICSID', 'SSLKEY', 'SSLCERT', 'SSLCA']);

  If any of the environment variables(process.env.GOOGLEANALYTICSID) don't exist, the process exits with code 400
