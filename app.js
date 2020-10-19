const dotenv = require('dotenv')

/*
LIFE CYCLE
 PACKAGE.JSON
 DOCKER-COMPOSE (environement)
 DOCKER-COMPOSE (env_file)
 DOTENV
 */

dotenv.config({
    path: __dirname + '/.test.env'
})

console.log(process.env.test)

