# Github Repos Wrapper Api

This repo hold the code for git-repos-backend, it allows one to pass in a username and get the list of all repos belonging to that user.

### Project Structure

```
tree . --filelimit=13

.
├── README.md
├── coverage
│   ├── clover.xml
│   ├── coverage-final.json
│   ├── lcov-report
│   │   ├── base.css
│   │   ├── block-navigation.js
│   │   ├── favicon.png
│   │   ├── index.html
│   │   ├── prettify.css
│   │   ├── prettify.js
│   │   ├── sort-arrow-sprite.png
│   │   ├── sorter.js
│   │   └── src
│   │       ├── app.js.html
│   │       ├── controllers
│   │       │   ├── index.html
│   │       │   └── repos.js.html
│   │       ├── index.html
│   │       └── routes
│   │           ├── index.html
│   │           └── routes.js.html
│   └── lcov.info
├── jest.config.json
├── node_modules [403 entries exceeds filelimit, not opening dir]
├── package-lock.json
├── package.json
├── sample-output.png
├── src
│   ├── __tests__
│   │   └── repos.test.js
│   ├── app.js
│   ├── controllers
│   │   └── repos.js
│   ├── index.js
│   ├── routes
│   │   └── routes.js
│   └── tests
│       └── setupTests.js
└── testcoverage.png

11 directories, 29 files
```

### Techstack

1. Node js
2. Jest
3. Express js

#### Local set up

1. Clone the repo, then run the following commands in order in your Terminal


```bash

cd git-repos-backend
git checkout <branch-of-interest>
npm install
npm run test # to run test coverage

```
Inside the root of your project create a new file ```.env``` and add the following code:
```
NODE_PORT=3001
```
You can change 3001 to your desired port 
Then run:
```
npm start # makes the app available on localhost, port 3001 by default

```

2. Navigate to [http://localhost:3001/](http://localhost:3001/) on postman.
#### Endpoints 

You should be able to see a response object
### Sample output

#### Submit a Pull Request

How to:

1. In Terminal, do this in the root directory of the project

```bash
git checkout -b feature/short-description 
```

##### Branch naming convention\*

Preface you branch name with

- `feature` for branches that introduce new functionality
- `chore` for branches that perform a useful general improvement, not tied to any specific functionality
- `fix` for branches that fix broken functionality
- `tests` for branches that only add developer tests

2. Raise a PR on GitHub, making sure to follow the inbuilt PR template.

3. Your changes will be merged into `main` on condition that:

- they do not break existing functionality
- they do not lower test coverage (unreasonably)
### sample test coverage
