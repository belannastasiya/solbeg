const path = require('path');

describe('Download check', () => {
    it('open the site', () => {
        cy.visit(' https://www.servicechannel.com/sc/invoicing/invoices?action=list');
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

    it('select "Rejected", all checkbox,  tax report', () => {

        cy.contains('REJECTED').click();
        cy.get('#checkbox-toggle-all', {timeout:60000}).check();
        cy.contains('/ Upload').click();
        cy.contains('Download Tax Report').click();
    });
    it('Download Tax Report', () => {
       /* cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
              setTimeout(function () { doc.location.reload() }, 5000);
            }); */
        cy.get('.modal-dialog').should('be.visible')
        cy.get('.modal-footer').should('be.visible')
        //cy.get('#sbmTemplLink', { timeout: 10000 }).eq(0)
        //.click({ force:true, multiple:true});
        cy.wait(10000);
        //cy.get('document.querySelector("#downloadTaxReportWindow > div > div > div.modal-footer > button.btn.btn-default")').click();
        // cy.get('div -> div -> .modal-footer.button.btn.btn-primary').as('dwnBtn');
        // cy.get('#downloadTaxReportWindow/div/div/div[3]/#sbmTemplLink').as('dwnBtn');
        // cy.get('*[@id="downloadTaxReportWindow"]/div')
        // cy.get('')
        //*[@id="downloadTaxReportWindow"]
        // cy.get('[id^=sbmTemplLink]').click;
        // cy.get('@dwnBtn').click({force:true, multiple:true});
         cy.get('button#sbmTemplLink').click({force:true, multiple:true});
        // cy.wait(3000);
            
     
        //cy.get('#downloadTaxReportWindow').click;
        //cy.wait(10000);
        cy.get('button#sbmTemplLink').first().click({force:true});
    })
});