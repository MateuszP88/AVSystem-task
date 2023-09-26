HOW TO RUN TESTS IN CYPRESS

# 1. Install VS Code

# 2. Install Node.js
For Windows: Instruction is on page https://phoenixnap.com/kb/install-node-js-npm-on-windows
For MacOS: Instruction is on page  https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/

# Instruction how to clone repo
Open page https://github.com/MateuszP88/AVSystem-task

a) Press Clone
b) Copy path
c) Open VS Code
d) Create folder
e) Open terminal
f) Write: git clone https://github.com/MateuszP88/AVSystem-task.git

# How to install cypress
1. Open folder with repo
2. In terminal write npm install cypress --save-dev

# How to run cypress tests
Type in terminal npx cypress open

# How to open cypress
Type in terminal: npx cypress run
Tests for Welcome Page only: npx cypress run --spec 'cypress/e2e/Welcome Page/**'
Tests for Form Page only: npx cypress run --spec 'cypress/e2e/Form Page/**'
Tests for Stepper Page only: npx cypress run --spec 'cypress/e2e/Stepper Page/**'
