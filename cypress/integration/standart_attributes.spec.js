it('open "Manage Assets', () => {
  cy.visit('https://www.servicechannel.com/em/assets');
});
it('enter username', () => {
  cy.get('#UserName')
    .type('DEMO');
});
it('enter password', () => {
  cy.get('#Password')
    .type('d3m0');
  cy.get('#LoginBtn').click();

  it('Sort assets', () => {
    cy.get('.fa-sort-amount-asc').click();
  });
  it('Select Standart Attributes', () => {
    cy.get('#list-header-controls > .dropdown > .btn').click();
    cy.get('#list-header-controls > .dropdown > .dropdown-menu > :nth-child(1) > a > span').click();
  });
})
