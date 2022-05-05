const path = require('path');

describe('Service Cannel opening', () => {
  it('open the site', () => {
    cy.visit('https://lt1login.servicechannel.com/account/logon?&returnUrl=https%3a%2f%2flt1.servicechannel.com%2fem%2fAccount%2fLogOn%3freturnUrl%3d%2fem%2fsummary');
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

  it('verifies download', () => {
    cy.wait(3000);

    cy.window().document().then(function (doc) {
      doc.addEventListener('click', () => {
        setTimeout(function () { doc.location.reload() }, 5000);
      });
      cy.get('.ui-button').click();
    });

    const fileName = 'EM_AssetSummaryReport_05-05-2022.xls';

    const downloadsFolder = Cypress.config('downloadsFolder');
    const downloadedFilename = path.join(downloadsFolder, fileName);

    cy
        .readFile(downloadedFilename, 'binary', {timeout: 15000})
        .then((pdfDownloaded) => {
            cy.fixture(fileName, 'binary', {timeout: 15000}).then((pdfFixture) => {
                expect(pdfDownloaded).to.deep.equal(pdfFixture);
            })
        });
});
});
describe('convert data to Json', () => 
{ it('read data from xcel', () =>
 { 
   cy.parseXlsx('cypress/fixtures/EM_AssetSummaryReport_05-05-2022.xls').then( (jsonData) =>
    { const rowLength = Cypress.$(jsonData[0].data).length
       for (let index = 0; index < rowLength; index++)
        { 
          var jsonData = jsonData[index].data 
          console.log(jsonData[index].data)
          cy.writeFile("cypress/fixtures/EM_AssetSummaryReport_05-05-2022.json", {username:jsonData[0][0], password:jsonData[0][1]})
        }
    })
 })
})       
