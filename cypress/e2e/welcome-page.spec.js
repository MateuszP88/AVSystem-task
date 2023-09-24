describe("Angular QA Recruitment App Tests - Welcome Page", () => {

    beforeEach(() => {
        cy.intercept("https://angular-qa-recruitment-app.netlify.app/").as('WelcomePage')
        cy.visit("@WelcomePage").then( ({response}) => {
            expect(response.statusCode).to.eq(200);
            expect(response.body).to.not.be.null;
        });
    });

    it("Check Form ", () => {
        // Locate the "About" link
        const aboutLink = cy.get('a[data-test="about-link"]'); // Replace with the actual link selector
    
        // Click the "About" link
        aboutLink.click();
    
        // Assert that the URL has changed to the About page URL
        cy.url().should("include", "/about");
    
        // Optionally, you can also check for page content to confirm navigation
        cy.contains("About Page").should("be.visible"); // Replace with your expected content
      });
    
  });