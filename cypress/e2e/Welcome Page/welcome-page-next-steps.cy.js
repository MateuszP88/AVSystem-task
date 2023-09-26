describe('Angular QA Recruitment App Tests - Welcome Page - Next Steps section', () => {
    beforeEach(() => {
        cy.intercept('/').as('welcomePage');
        cy.visit('/');
        cy.wait('@welcomePage').then( ({response}) => {
            expect(response.statusCode).to.eq(200);
            expect(response.body).to.not.be.null;
          });
    });

    it("Check Angular Material button", () => {
    // Check if terminal is visible
    cy.get('body > app-root > app-home > div > div.terminal').should('be.visible');
    // Check if terminal displays script for "New Component button"
    cy.get('body > app-root > app-home > div > div.terminal > pre').should('have.text', 'ng generate component xyz');
    // Click on Angular Material
    cy.get('.card-small')
    .contains('Angular Material')
    .should('be.visible')
    .click();
    // Check if terminal displays script for "Angular Material" button
    cy.get('body > app-root > app-home > div > div.terminal > pre').should('have.text', 'ng add @angular/material');
    });

    it("Check Add PWA Support button", () => {
        // Check if terminal is visible
        cy.get('body > app-root > app-home > div > div.terminal').should('be.visible');
        // Check if terminal displays script for "New Component button"
        cy.get('body > app-root > app-home > div > div.terminal > pre').should('have.text', 'ng generate component xyz');
        // Click on Add PWA Support
        cy.get('.card-small')
        .contains('Add PWA Supp')
        .should('be.visible')
        .click();
        // Check if terminal displays script for "Add PWA Support" button
        cy.get('body > app-root > app-home > div > div.terminal > pre').should('have.text', 'ng add @angular/pwa');
    });

    it("Check Add Dependency button", () => {
        // Check if terminal is visible
        cy.get('body > app-root > app-home > div > div.terminal').should('be.visible');
        // Check if terminal displays script for "New Component button"
        cy.get('body > app-root > app-home > div > div.terminal > pre').should('have.text', 'ng generate component xyz');
        // Click on Add Dependency
        cy.get('.card-small')
        .contains('Add Dependency')
        .should('be.visible')
        .click();
        // Check if terminal displays script for "Add Dependency" button
        cy.get('body > app-root > app-home > div > div.terminal > pre').should('have.text', 'ng add _____');
    });

    it("Check Run and Watch Tests button", () => {
        // Check if terminal is visible
        cy.get('body > app-root > app-home > div > div.terminal').should('be.visible');
        // Check if terminal displays script for "New Component button"
        cy.get('body > app-root > app-home > div > div.terminal > pre').should('have.text', 'ng generate component xyz');
        // Click on Run and Watch Tests
        cy.get('.card-small')
        .contains('Run and Watch Tests')
        .should('be.visible')
        .click();
        // Check if terminal displays script for "Run and Watch Tests" button
        cy.get('body > app-root > app-home > div > div.terminal > pre').should('have.text', 'ng test');
    });

    it("Check Build for Production button", () => {
        // Check if terminal is visible
        cy.get('body > app-root > app-home > div > div.terminal').should('be.visible');
        // Check if terminal displays script for "New Component button"
        cy.get('body > app-root > app-home > div > div.terminal > pre').should('have.text', 'ng generate component xyz');
        // Click on Build on Production
        cy.get('.card-small')
        .contains('Build for Production')
        .should('be.visible')
        .click();
        // Check if terminal displays script for "Build on Production" button
        cy.get('body > app-root > app-home > div > div.terminal > pre').should('have.text', 'ng build');
    });

    it("Check displayed text in terminal depends on clicked button", () => {
        // Check if terminal is visible
        cy.get('body > app-root > app-home > div > div.terminal').should('be.visible');
        // Check if terminal displays script for "New Component button"
        cy.get('body > app-root > app-home > div > div.terminal > pre').should('have.text', 'ng generate component xyz');
        // Click on Build on Production
        cy.get('.card-small')
        .contains('Build for Production')
        .should('be.visible')
        .click();
        // Check if terminal displays script for "Build on Production" button
        cy.get('body > app-root > app-home > div > div.terminal > pre').should('have.text', 'ng build');
        // Click on New Component
        cy.get('.card-small')
        .contains('New Component')
        .should('be.visible')
        .click();
        // Check if terminal displays script for "New Component button"
        cy.get('body > app-root > app-home > div > div.terminal > pre').should('have.text', 'ng generate component xyz');
    });

    it('Check Animations circle', () => {
        // Check if circle is visible
        cy.get('body > app-root > app-home > div > div:nth-child(10) > a:nth-child(1)').should('be.visible');
        // Check if circle has correct redirection url
        cy.get('body > app-root > app-home > div > div:nth-child(10) > a:nth-child(1)').should('have.attr', 'href', 'https://angular.io/guide/animations');
    });

    it('Check Angular CLI circle', () => {
        // Check if circle is visible
        cy.get('body > app-root > app-home > div > div:nth-child(10) > a:nth-child(2)').should('be.visible');
        // Check if circle has correct redirection url
        cy.get('body > app-root > app-home > div > div:nth-child(10) > a:nth-child(2)').should('have.attr', 'href', 'https://cli.angular.io/');
    })

    it('Check Meetup circle', () => {
        // Check if circle is visible
        cy.get('body > app-root > app-home > div > div:nth-child(10) > a:nth-child(3)').should('be.visible');
        // Check if circle has correct redirection url
        cy.get('body > app-root > app-home > div > div:nth-child(10) > a:nth-child(3)').should('have.attr', 'href', 'https://www.meetup.com/find/?keywords=angular');
    });

    it('Check Discord circle', () => {
        // Check if circle is visible
        cy.get('body > app-root > app-home > div > div:nth-child(10) > a:nth-child(4)').should('be.visible');
        // Check if circle has correct redirection url
        cy.get('body > app-root > app-home > div > div:nth-child(10) > a:nth-child(4)').should('have.attr', 'href', 'https://discord.gg/angular');
    });

    it('Check "Give our repo a star" button', () => {
        // Check if Star button is visible
        cy.get('body > app-root > app-home > div > footer > a:nth-child(1)').should('be.visible');
        // Check if button has correct redirection url
        cy.get('body > app-root > app-home > div > footer > a:nth-child(1)').should('have.attr', 'href', 'https://github.com/angular/angular')
    });

});