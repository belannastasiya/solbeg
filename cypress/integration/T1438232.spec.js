const path = require('path');

describe('Download check', () => {
    it('open the site', () => {
      cy.visit(' https://lt1.servicechannel.com/sc/Admin/MliConfiguration');
    });
    it('enter username', () => {
      cy.get('#UserName')
        .type(Cypress.env('username'));
    });
    it('enter password', () => {
      cy.get('#Password')
    
        .type(Cypress.env('password'));
      cy.get('#LoginBtn').click();
    });
  
    it('download', () => {
      cy.wait(3000);
  
     
        cy.wait(3000);
        cy.contains('Upload and Download MLI Rules').scrollIntoView().click();
        cy.wait(3000);
      
     
        cy.get('[data-href="/sc/Admin/MliConfiguration/DownloadHierarchyTemplate?isBlank=false"]').click();
    });
});
