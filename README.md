# RecursionHell
Software Engineering Project Fall 2022

To run frontend <br />
cd frontend <br />
npm install <br />
npm start <br />

to run backend <br />
cd server <br />
node server.js <br />


Heroku deployment:
Since we have both front-end and back-end running in the same repo, we need to maintain multiple package.json and node modules. The top level package.json is utilized by heroku during deployment and hence needs a npm start command. This command can be used during dev to start both front-end and server simultaneously. Since there is more than one command to run, we can parallely execute these commands using run-p. To start the angular from the root directory, a prefix can be given. All the sources are mentioned below for reference:
https://stackoverflow.com/questions/47124869/deploying-a-full-stack-node-app-npm-package-json-architecture
https://itnext.io/4-solutions-to-run-multiple-node-js-or-npm-commands-simultaneously-9edaa6215a93
https://stackoverflow.com/questions/36172442/how-can-i-get-npm-start-at-a-different-directory
https://stackoverflow.com/questions/58404547/cannot-read-property-match-of-undefined-during-npm-install
https://stackoverflow.com/questions/50333003/could-not-find-module-angular-devkit-build-angular
https://stackoverflow.com/questions/59205530/heroku-server-crashes-with-javascript-heap-out-of-memory-when-deploying-react

# DB setup:

Download Postgres from the official website https://www.enterprisedb.com/downloads/postgres-postgresql-downloads.

The user should be postgres (default). The password is the same as the one in the config file. Install it on personal systems to listen on default port (5432). Create a database called project_db using CREATE DATABASE command in postgres. Once it is created, the server.js will connect to that database. 

Finally, to set up the default logins table, run the table_setup.js script in the database directory. This will populate it with a sample entry fir us to test against. Note the password in the database will be hashed and not stored as plaintext. 