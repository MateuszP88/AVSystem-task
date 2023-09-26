describe('Angular QA Recruitment App Tests - Form Page - Form', () => {

    const name = 'Mateusz';
    const alterEgo = 'Mati';
    const editName = 'Karol';
    const editAlterEgo = 'Karolek'

    beforeEach(() => {
        cy.intercept('/form').as('formPage');
        cy.visit('/form');
        cy.wait('@formPage').then( ({response}) => {
            expect(response.statusCode).to.eq(200);
            expect(response.body).to.not.be.null;
          });
    });

    it('New Hero form - positive path', () => {
        // Form should be visible
        cy.get('#name').should('be.visible');
        cy.get('#alterEgo').should('be.visible');
        cy.get('#power').should('be.visible');
        // Click New Hero button
        cy.get('body > app-root > app-form > div > div:nth-child(1) > form > button.btn.btn-default')
        .contains('New Hero')
        .click();
        // Type Name
        cy.get('#name').type(name);
        // Type Alter Ego
        cy.get('#alterEgo').type(alterEgo);
        // Choose Hero Power
        cy.get('#power').select('Super Hot');
        // Click Submit
        cy.get('body > app-root > app-form > div > div:nth-child(1) > form > button.btn.btn-success')
        .contains('Submit')
        .click();
        // Submitted form should be visible and contain correct data
        cy.contains('You submitted the following:').should('be.visible');
        // Name
        cy.get('body > app-root > app-form > div > div.container.results > div > div:nth-child(2) > div.col-xs-9')
        .should('be.visible')
        .and('have.text', name);
        // Alter Ego
        cy.get('body > app-root > app-form > div > div.container.results > div > div:nth-child(3) > div.col-xs-9')
        .should('be.visible')
        .and('have.text', alterEgo);
        // Power
        cy.get('body > app-root > app-form > div > div.container.results > div > div:nth-child(4) > div.col-xs-9')
        .should('be.visible')
        .and('have.text', 'Super Hot');
    });

    it('Edit submitted form', () => {
        // Check if all fields are filled up
        cy.get('#name')
        .should('be.visible')
        .and('have.value', 'Dr IQ');
        cy.get('#alterEgo')
        .should('be.visible')
        .and('have.value', 'Chuck Overstreet');
        cy.get('#power')
        .should('be.visible')
        .and('have.value', 'Really Smart');
        // Click Submit
        cy.get('body > app-root > app-form > div > div:nth-child(1) > form > button.btn.btn-success')
        .contains('Submit')
        .click();
        // Submitted form should be visible
        cy.contains('You submitted the following:').should('be.visible');
        cy.get('body > app-root > app-form > div > div.container.results > div > div:nth-child(2) > div.col-xs-9').should('have.text', 'Dr IQ');
        // Click Edit button
        cy.get('body > app-root > app-form > div > div.container.results > div > button')
        .contains('Edit')
        .click();
        // Change Name and Alter Ego
        cy.get('#name')
        .clear()
        .type(editName);
        cy.get('#alterEgo').clear()
        .type(editAlterEgo);
        // Click Submit again
        cy.get('body > app-root > app-form > div > div:nth-child(1) > form > button.btn.btn-success')
        .contains('Submit')
        .click();
        // Submitted form should be visible and contain edited data
        cy.contains('You submitted the following:').should('be.visible');
        // Name
        cy.get('body > app-root > app-form > div > div.container.results > div > div:nth-child(2) > div.col-xs-9')
        .should('be.visible')
        .and('have.text', editName);
        // Alter Ego
        cy.get('body > app-root > app-form > div > div.container.results > div > div:nth-child(3) > div.col-xs-9')
        .should('be.visible')
        .and('have.text', editAlterEgo); 
    });

    it('Check field validation', () => {
        // Check if all fields are filled up
        cy.get('#name')
        .should('be.visible')
        .and('have.value', 'Dr IQ');
        cy.get('#alterEgo')
        .should('be.visible')
        .and('have.value', 'Chuck Overstreet');
        cy.get('#power')
        .should('be.visible')
        .and('have.value', 'Really Smart');
        // Clear Name field
        cy.get('#name').clear();
        // Validation alert should be displayed
        cy.get('.alert-danger')
        .eq(0)
        .should('to.be.exist')
        .and('have.text', ' Name is required ')
        // Submit button should be disabled
        cy.get('body > app-root > app-form > div > div:nth-child(1) > form > button.btn.btn-success').should('be.disabled');
        // Type a Name again
        cy.get('#name').type(name);
        // Validation alert should be gone
        cy.get('.alert-danger')
        .eq(0)
        .should('be.hidden')
        // Clear a Hero Power field
        cy.get('#power').select([]);
        // Validation alert should be displayed
        cy.get('.alert-danger')
        .eq(1)
        .should('to.be.exist')
        .and('have.text', ' Power is required ')
        // Submit button should be disabled
        cy.get('body > app-root > app-form > div > div:nth-child(1) > form > button.btn.btn-success').should('be.disabled');
        // Select Power again
        cy.get('#power').select('Super Hot');
        // Validation alert should be gone
        cy.get('.alert-danger')
        .eq(0)
        .should('be.hidden');
        // Submit button should be active
        cy.get('body > app-root > app-form > div > div:nth-child(1) > form > button.btn.btn-success').should('be.enabled');
    });

});