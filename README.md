# Node Starter Kit
> [Demo Here](https://node-starter-kit-demo.herokuapp.com)

[![Code Climate](https://codeclimate.com/github/cmtanko/node_starter_kit/badges/gpa.svg)](https://codeclimate.com/github/cmtanko/node_starter_kit)
[![Build Status](https://travis-ci.org/cmtanko/node_starter_kit.svg?branch=master)](https://travis-ci.org/cmtanko/node_starter_kit)
[![Codecov](https://api.codeclimate.com/v1/badges/ba594bcde8c75c8f76d0/test_coverage)](https://codeclimate.com/github/cmtanko/node_starter_kit/test_coverage)

There are various other node starter kit out there yet, Created this one with specific dependencies
Features:
> EcmaScript 2015 /ES6
> Unit Testing Setup with Mocha/Chai
> Commit checking with Husky and Linting with ESLint
> Logger
> Swagger
> Process Management with PM2

## To work or contribute in the project

#### 1. Clone this repo in your server.

```sh
> git clone https://github.com/cmtanko/psr_creator_api
> cd node_starter_kit 
> cp .env.example .env
```

#### 2. Install the dependencies

```sh
npm install
```

#### 3. Start the dev server

```sh
npm run dev
```

#### 4. Start the prod server

```sh
npm start
npm run build
```

#### 4. Testing
```sh
npm test
```

#### 4. DATABASE Setup (Postgres)
```sh
- Create a database with name newUsers (env.DB_NAME = 'newUsers')
- knex migrate:latest
- knex seed:run 
```


### Contribution

Feel free to fork this project. Do send a pull request our way if you implement
something the world should see.

