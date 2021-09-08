// https://dev.to/murillowelsi/api-testing-with-cypress-part-1-5coe

// first successful test case
describe('Mocha’s interface', () => {
  context('it provides a way to keep tests easier to read and organized.', () => {
    it('This is your test case', () => {
      expect(true).to.eq(true)
    });
  });
});

// first fail test case
// describe('Mocha’s interface', () => {
//   context('it provides a way to keep tests easier to read and organized.', () => {
//     it('This is your test case', () => {
//       expect(true).to.eq(false)
//     });
//   });
// });