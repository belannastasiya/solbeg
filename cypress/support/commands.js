// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// require('cypress-downloadfile/lib/downloadFileCommand')
// require('cypress-downloadfile/lib/downloadFileCommand')

require('cypress-downloadfile/lib/downloadFileCommand');
Cypress.Commands.add("parseXlsx", (inputFile) => {
    return cy.task('parseXlsx', {filePath: inputFile})
});
const fs = require('fs');
const XLSX = require('xlsx');

const read = ({file, sheet}) => {
   const buf = fs.readFileSync(file);
   const workbook = XLSX.read(buf, { type: 'buffer' });
   const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
   return rows
}
Cypress.Commands.add("parseXlsx", (inputFile) => {
    return cy.task('parseXlsx', { filePath: inputFile })
    });
