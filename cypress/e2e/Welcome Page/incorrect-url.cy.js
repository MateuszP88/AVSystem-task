describe('Check behaviour for incorrect url', () => {

    it('Redirects to Welcome Page when url is invalid', () => {
        //Go to Welcome Page
        cy.visit('/');
        cy.url().should('eq', 'https://angular-qa-recruitment-app.netlify.app/');
        // Go to Form Page
        cy.visit('/form');
        cy.url().should('eq', 'https://angular-qa-recruitment-app.netlify.app/form');
        // Check url with incorrect ending
        cy.visit('/dog');
        // Welcome Page should be displayed
        cy.url().should('eq', 'https://angular-qa-recruitment-app.netlify.app/');
    });

});