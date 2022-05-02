const path = require('path');

describe('Google scroll down', () => {
    it('open the site', () => {
        cy.visit(' https://www.gismeteo.com/');
    });
    it('scroll map', () => {
        cy.wait(300);
        cy.contains('Weather on a map').scrollIntoView().click();
        cy.wait(3000);
        cy.visit(' https://www.gismeteo.com/');
        cy.get('.input').type('Moscow').wait(300);
        
    });
});