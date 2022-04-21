describe('Service Cannel opening', () => {
  it('open the site', () => {
    cy.visit('https://lt1login.servicechannel.com/account/logon?&returnUrl=https%3a%2f%2flt1.servicechannel.com%2fem%2fAccount%2fLogOn%3freturnUrl%3d%2fem%2fsummary');
  });
  it('enter username', () => {
    cy.get('#UserName')
      .type('***');
  });
  it('enter password', () => {
    cy.get('#Password') //privyay
      .type('***');
    cy.get('#LoginBtn').click();
    cy.get('.ui-button').click();
  })
})