// https://dev.to/murillowelsi/api-testing-with-cypress-part-2-creating-your-tests-270i

// describe('Given the Users api', () => {
//   context('When I send POST /usuarios', () => {
//     it('Then it should create a new user', () => {
//       cy.request({
//         method: 'POST',
//         url: 'https://serverest.dev/usuarios',
//         body: {
//           nome: "Dumb Joe",
//           email: "dumb.joe@qa.com.br",
//           password: "test",
//           administrador: "true"
//         }
//       })
//         .should((response) => {
//           expect(response.status).eq(201)
//           expect(response.body.message).eq("Cadastro realizado com sucesso")
//         });
//     });
//   });
// });

let fakeUser;

describe('Given the Users api', () => {
  beforeEach(() => {
    cy.task('freshUser').then((user) => {
      fakeUser = user;
      cy.log(JSON.stringify(fakeUser))
    });
  });

  context('When I send POST /usuarios', () => {
    it('Then it should create a new user', () => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: fakeUser
      })
        .should((response) => {
          expect(response.status).eq(201)
          expect(response.body.message).eq("Cadastro realizado com sucesso")
        });
    });
  });
});