
# engage_conference_api_usage_sample
Sample NodeJS based application to demonstrate the usage of Room creation, deletion, Play announcement functionalities of Engage REST API SDK


# Configure the Application:
## Port Configuration: 
By default **port=8000** is being set internally if no port being configured while running the app. To run the app in different port, set port to environment (PORT) while running the app.

`set PORT=<port_number>&&node server.js` 

Eg: 
     `set PORT=5000&&node server.js`
     

## Base_URL Configuration: 
By default Base_URL="https://api.esmp-radisys.com/api/v1" is being set internally if no URL being configured while running the app. To configure the different URL, either change the base_url  at controllers -> conference.js or set URL to environment (CONFERENCE_API_BASE_URL) while running the app.

   `set CONFERENCE_API_BASE_URL=<your_URL>&&node server.js`
     
Eg: 
     `set CONFERENCE_API_BASE_URL="https://dev.testapi.com"&&node server.js`
     
 use *export* instead of *set* while running over linux based terminals
     

## Steps to run this application:

 1. Install the npm packages by run below commands in terminal:

		react_client_app> npm install

2. Run this application using below command

		react_client_app> node server.js

*Note: use "NODE_TLS_REJECT_UNAUTHORIZED='0' node server.js", incase of any certificate issues while runnig in the local.* 
