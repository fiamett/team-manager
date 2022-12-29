const employee = require('../lib/employee');

var emp = new employee('jack','23','email@email.com','employee');

test('check name', () => {
  expect(emp.getName()).toBe('jack');
});
test('check id', () => {
  expect(emp.getId()).toBe('23');
});
test('check email', () => {
  expect(emp.getEmail()).toBe('email@email.com');
});
test('check role', () => {
  expect(emp.getRole()).toBe('employee');
});
