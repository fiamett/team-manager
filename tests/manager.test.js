const manager = require('../lib/manager')

var emp = new manager('jack','23','email@email.com','1');

test('checks role', () => {
  expect(emp.getRole()).toBe('manager');
});
test('checks office number', () => {
  expect(emp.getOffNum()).toBe('1');
});