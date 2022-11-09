describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.loker.id/login')
    cy.get('#acf-field_574b31195165b').type('ahmadabidb909@gmail.com')
    cy.get('#acf-field_574b311951bc8').type('Ganteng1')
    cy.get('.acf-button').click()
  })
})