const intern = require('../lib/intern')

var emp = new intern('jack','23','email@email.com','school');

test('checks role', () => {
  expect(emp.getRole()).toBe('intern');
});
test('checks school', () => {
  expect(emp.getSchool()).toBe('school');
});