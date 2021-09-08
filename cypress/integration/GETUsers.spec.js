// https://dev.to/murillowelsi/api-testing-with-cypress-part-2-creating-your-tests-270i

describe('Given the Users api', () => {
  context('When I send GET /usuarios', () => {
    it('Then it should return a list with all registered users', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios'
        })
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.quantidade).to.eq(response.body.usuarios.length)
          Cypress._.each(response.body.usuarios, (usuario) => {
            expect(usuario.email).to.not.be.null
            expect(usuario).to.have.all.keys('nome', 'email', 'password', 'administrador', '_id')
          })
        });
    });
  });
});