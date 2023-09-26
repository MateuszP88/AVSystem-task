describe("Angular QA Recruitment App Tests - Stepper Page - Toolbar", () => {

    beforeEach(() => {
        cy.intercept('/stepper').as('stepperPage');
        cy.visit('/stepper');
        cy.wait('@stepperPage').then( ({response}) => {
            expect(response.statusCode).to.eq(200);
            expect(response.body).to.not.be.null;
          });
    });

    it("Click Welcome link from Toolbar ", () => {
        cy.intercept('/').as('welcomePage');
        // Click Welcome link
        cy.get('#main-view-link')
            .should('be.visible')
            .click();
        // Check if page request has got OK status code and response
        cy.wait('@welcomePage').then( ({response}) => {
            expect(response.statusCode).to.eq(200);
            expect(response.body).to.not.be.null;
          });
        // Assert that the URL has changed to the Welcome page URL
        cy.url().should("not.include", "/form");
        // Assert that Resources and Next Steps sections are visible on page
        cy.contains("Resources").should("be.visible");
        cy.contains('Next Steps').should("be.visible");
    });

    it("Click Form link from Toolbar ", () => {
        cy.intercept('/form').as('formPage');
        // Click Form link
        cy.get('#form-view-link')
            .should('be.visible')
            .click();
        // Check if page request has got OK status code and response
        cy.wait('@formPage').then( ({response}) => {
            expect(response.statusCode).to.eq(200);
            expect(response.body).to.not.be.null;
          });
        // Assert that the URL has changed to the Form page URL
        cy.url().should("include", "/form");
        // Assert that Form page has 'Hero Power' form group
        cy.contains("Hero Power").should("be.visible"); 
    });

    it("Click Twitter redirection link from Toolbar ", () => {
        const twitterLink = cy.get('[aria-label="Angular on twitter"]');
        // Click on Twitter icon
        twitterLink.should('be.visible');
        twitterLink.invoke('removeAttr', 'target').click();
        // Assert that the URL has changed to the Twitter page URL
        cy.origin('https://twitter.com/angular', () => {
            // Assert that 1st step is visible on the page
            cy.url().should("equal", "https://twitter.com/angular");
        });
    });

    it("Click Youtube redirection link from Toolbar ", () => {
        const YoutubeLink = cy.get('[aria-label="Angular on YouTube"]');
        // Click on YouTube icon
        YoutubeLink.should('be.visible');
        YoutubeLink.invoke('removeAttr', 'target').click();
        // Assert that the URL has changed to the YouTube page URL
        cy.origin('https://consent.youtube.com/', () => {
            // Assert that 1st step is visible on the page
            cy.url().should("contains", "https://consent.youtube.com/");
        });
    });
  });