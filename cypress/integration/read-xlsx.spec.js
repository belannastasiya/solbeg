context('Xlsx file', () => {
    it('Read excel file', () => {
      cy.task('readXls', { file: 'my-excel.xls', sheet: "Sheet1" }).then((rows) => {
        expect(rows.length).to.equal(543)
        // expect(rows[0]["column name"]).to.equal(11060)
      })
    })
  })
  