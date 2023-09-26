HOW TO RUN TESTS IN CYPRESS

# Install VS Code

# Install Node.js
- For Windows: Instruction is on page https://phoenixnap.com/kb/install-node-js-npm-on-windows
- For MacOS: Instruction is on page  https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/

# Instruction how to clone repo
Open page https://github.com/MateuszP88/AVSystem-task

1. Press Clone
2. Copy path
3. Open VS Code
4. Create folder
5. Open terminal
6. Write: git clone https://github.com/MateuszP88/AVSystem-task.git

# How to install cypress
1. Open folder with repo
2. In terminal write npm install cypress --save-dev

# How to run cypress tests
- Type in terminal npx cypress open

# How to open cypress
- Type in terminal: npx cypress run
- Tests for Welcome Page only: npx cypress run --spec 'cypress/e2e/Welcome Page/**'
- Tests for Form Page only: npx cypress run --spec 'cypress/e2e/Form Page/**'
- Tests for Stepper Page only: npx cypress run --spec 'cypress/e2e/Stepper Page/**'
