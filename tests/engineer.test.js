const engineer = require('../lib/engineer')

var emp = new engineer('jack','23','email@email.com','engie');

test('checks role', () => {
  expect(emp.getRole()).toBe('engineer');
});
test('checks git', () => {
  expect(emp.getGit()).toBe('engie');
});