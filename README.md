# Node Starter Kit

[![Code Climate](https://codeclimate.com/github/cmtanko/node_starter_kit/badges/gpa.svg)](https://codeclimate.com/github/cmtanko/node_starter_kit)
[![Build Status](https://travis-ci.org/cmtanko/node_starter_kit.svg?branch=master)](https://travis-ci.org/cmtanko/node_starter_kit)
[![Codecov](https://api.codeclimate.com/v1/badges/ba594bcde8c75c8f76d0/test_coverage)](https://codeclimate.com/github/cmtanko/node_starter_kit/test_coverage)

**Live Demo**: https://node-starter-kit.herokuapp.com

**Live Demo AWS**: http://node-starter-kit2-dev.us-east-1.elasticbeanstalk.com

Yet another startup kit for NodeJs :D , Created this one with following specific dependencies
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

Feel free to fork this project.
If something is unclear, confusing, or needs to be refactored, please let me know.
Pull requesta are always welcomed,start by opening a issue before submitting a pull request


### License

Copyright (c) 2017 Suchan Badyakar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
