// https://dev.to/murillowelsi/api-testing-with-cypress-part-2-creating-your-tests-270i

describe('Given the Users api', () => {
  context('When I send GET /usuarios passing id query param', () => {
    it('Then it should return only the filtered user', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/usuarios',
        qs: {
          _id: '0uxuPY0cbmQhpEz1'
        }
      })
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.usuarios[0].nome).to.eq("Fulano da Silva")
        });
    });
  });
});