const { waitForDebugger } = require('inspector');
const path = require('path');

describe('Download check', () => {
    it('open the site', () => {
      cy.visit(' https://qa1.servicechannel.com/sc/invoicing/invoices?action=list');
    });
    it('enter username', () => {
      cy.get('#UserName')
        .type(Cypress.env('username'));
    });
    it('enter password', () => {
      cy.get('#Password')
    
        .type(Cypress.env('password'));
      cy.get('#LoginBtn').click();
      cy. wait(6000);
    });
    
  
    it('Line Item Report Download', () => {
      cy.contains('/ Upload').click();
      // cy.get('.download-dropdown > .btn').click();
      // cy.get('.download-dropdown > .dropdown-menu > :nth-child(2) > a').click()
        cy.get('#checkbox-toggle-all').check();
        cy.get('#sbmTemplLink').click();
        
        cy.contains('Download Tax Report').click();
    
        
    });
});