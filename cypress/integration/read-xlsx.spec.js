context('Xlsx file', () => {
    it('Read excel file', () => {
      cy.task('readXlsx', { file: 'my-excel.xlsx', sheet: "Sheet1" }).then((rows) => {
        expect(rows.length).to.equal(543)
        // expect(rows[0]["column name"]).to.equal(11060)
      })
    })
  })
  context('Xlsx file', () => {
    it('Read excel file', () => {
      cy.task('readXlsx', { file: 'my-excel.xlsx', sheet: "Sheet1" }).then((rows) => {
        expect(rows.length).to.equal(543)
        // expect(rows[0]["column name"]).to.equal(11060)
      })
    })
  })