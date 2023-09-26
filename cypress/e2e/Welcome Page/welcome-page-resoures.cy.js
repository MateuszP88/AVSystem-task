describe("Angular QA Recruitment App Tests - Welcome Page - Resources section", () => {
    beforeEach(() => {
        cy.intercept('/').as('welcomePage');
        cy.visit('/');
        cy.wait('@welcomePage').then( ({response}) => {
            expect(response.statusCode).to.eq(200);
            expect(response.body).to.not.be.null;
          });
    });

    it('Check Learn Angular button', () => {
        const learnAngular = cy.get('body > app-root > app-home > div > div:nth-child(4) > a:nth-child(1)');
        // Check if button is visible
        learnAngular.should('be.visible');
        // Check if element has correct redirection link
        learnAngular.should('have.attr', 'href', 'https://angular.io/tutorial');
    });

    it('Check Learn CLI Documentation button', () => {
        const cliDocumentation = cy.get('body > app-root > app-home > div > div:nth-child(4) > a:nth-child(2)');
        // Check if button is visible
        cliDocumentation.should('be.visible');
        // Check if element has correct redirection link
        cliDocumentation.should('have.attr', 'href', 'https://angular.io/cli');
    });

    it('Check Angular Blog button', () => {
        const angularBlog = cy.get('body > app-root > app-home > div > div:nth-child(4) > a:nth-child(3)');
        // Click on Angular Blog button
        angularBlog.should('be.visible');
        angularBlog.invoke('removeAttr', 'target').click();
        // Assert that the URL has changed to the About page URL
        cy.origin('https://blog.angular.io/', () => {
            cy.url().should('equals', 'https://blog.angular.io/' );
        });
    });

    it('Check Angular DevTools button', () => {
        const angularDevtools = cy.get('body > app-root > app-home > div > div:nth-child(4) > a:nth-child(4)');
        // Check if button is visible
        angularDevtools.should('be.visible');
        // Check if element has correct redirection link
        angularDevtools.should('have.attr', 'href', 'https://angular.io/devtools/');
    });

});