describe('Angular QA Recruitment App Tests - Stepper Page - Stepper', () => {

    const name = 'Nowak, Jan';
    const adress ='Nocna 2, Gdynia, PL';
    const longerName = 'Nooooowak, Jaaaaaaaan';
    const longerAdress = 'Dłuuuuuuga 25, Warszawa, Polska';


    beforeEach(() => {
        cy.intercept('/stepper').as('stepperPage');
        cy.visit('/stepper');
        cy.wait('@stepperPage').then( ({response}) => {
            expect(response.statusCode).to.eq(200);
            expect(response.body).to.not.be.null;
          });
    });

    it('Stepper - positive path', () => {
        // Step 1 - fill out your name
        cy.get('#mat-input-0').should('be.visible');
        cy.get('#mat-input-0').type(name);
        // Click Next
        cy.contains('Next').click();
        // Step 2 - fill out your adress
        cy.get('#mat-input-1').should('be.visible');
        cy.get('#mat-input-1').type(adress);
        // Click Next
        cy.contains('Next').click({force:true});
        // Step 3 - Done (Check if typed values are the same as in the last step)
        cy.get('#cdk-step-content-0-2 > p:nth-child(1)').should('have.text', 'You are now done!');
        cy.get('#cdk-step-content-0-2 > p:nth-child(2)').should('have.text', " Name: "+ name + ' ');
        cy.get('#cdk-step-content-0-2 > p:nth-child(3)').should('have.text', ' Address: '+ adress +' ');
    });

    it('Stepper - check Back and Reset', () => {
        // Step 1 - fill out your name
        cy.get('#mat-input-0').should('be.visible');
        cy.get('#mat-input-0').type(name);
        // Click Next
        cy.contains('Next').click();
        // Step 2 - fill out your adress
        cy.get('#mat-input-1').should('be.visible');
        // Click Back to Step 1
        cy.contains('Back').click();
        cy.get('#mat-input-0').should('be.visible');
        // Click Next again
        cy.contains('Next').click();
        // Step 2 - fill out your adress
        cy.get('#mat-input-1').should('be.visible');
        cy.get('#mat-input-1').type(adress);
        // Click Next
        cy.contains('Next').click({force:true});
        // Step 3 - Done (Check if typed values are the same as in the last step)
        cy.get('#cdk-step-content-0-2 > p:nth-child(1)').should('have.text', 'You are now done!');
        cy.get('#cdk-step-content-0-2 > p:nth-child(2)').should('have.text', " Name: "+ name + ' ');
        cy.get('#cdk-step-content-0-2 > p:nth-child(3)').should('have.text', ' Address: '+ adress +' ');
        // Click Back to Step 2
        cy.contains('Back').click({force:true});
        cy.get('#mat-input-1').should('be.visible');
        // Click Next again to step 3
        cy.contains('Next').click({force:true});
        cy.get('#cdk-step-content-0-2 > p:nth-child(1)').should('have.text', 'You are now done!');
        // Click Reset to go back to step 1
        cy.contains('Reset').click();
        cy.get('#mat-input-0').should('be.visible');
    });

    it('Stepper - check field and lenght validation', () => {
        // Step 1 - fill out your name - longer than 20 characters
        cy.get('#mat-input-0').should('be.visible');
        cy.get('#mat-input-0').type(longerName);
        // Lenght validation alert should be visible
        cy.get('#cdk-step-content-0-0 > form > div.ng-star-inserted > small').should('be.visible').and('have.text', ' The maximum length for this field is 20 characters. ')
        // Clear Name field
        cy.get('#mat-input-0').clear();
        // Field validation alert should be visible
        cy.get('#cdk-step-content-0-0 > form > div.ng-star-inserted > small').should('be.visible').and('have.text', ' This field is required. ')
        // Type a Name which has less than 20 characters
        cy.get('#mat-input-0').should('be.visible');
        cy.get('#mat-input-0').type(name);
        // Click Next
        cy.contains('Next').click();
        // Step 2 - fill out your address - longer than 30 characters
        cy.get('#mat-input-1').should('be.visible');
        cy.get('#mat-input-1').type(longerAdress);
        // Lenght validation alert should be visible
        cy.get('#cdk-step-content-0-1 > form > div.ng-star-inserted > small').should('be.visible').and('have.text', ' The maximum length for this field is 30 characters. ')
        // Clear Address field
        cy.get('#mat-input-1').clear();
        // Field validation alert should be visible
        cy.get('#cdk-step-content-0-1 > form > div.ng-star-inserted > small').should('be.visible').and('have.text', ' This field is required. ')
        // Type an Address which has less than 30 characters
        cy.get('#mat-input-1').should('be.visible');
        cy.get('#mat-input-1').type(adress);
        // Click Next
        cy.contains('Next').click({force:true});
        // Step 3 - Done (Check if typed values are the same as in the last step)
        cy.get('#cdk-step-content-0-2 > p:nth-child(1)').should('have.text', 'You are now done!');
        cy.get('#cdk-step-content-0-2 > p:nth-child(2)').should('have.text', " Name: "+ name + ' ');
        cy.get('#cdk-step-content-0-2 > p:nth-child(3)').should('have.text', ' Address: '+ adress +' ');
    });



});