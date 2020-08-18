const Intern = require("../lib/Intern.js");

test("Can instantiate Employee instance", () => {
  const intern = new Intern('Larry', 6789, 'Larry@company.com')
  expect(intern).toBeInstanceOf(Intern)
})

test('getName() should return employee name', () => {
  const intern = new Intern('David', 9876, 'David@company.com')
  expect(intern.getName()).toBe('David')
})





// const Intern = require("../lib/Intern");

// test("Can set school via constructor", () => {
//   const testValue = "UCLA";
//   const e = new Intern("Foo", 1, "test@test.com", testValue);
//   expect(e.school).toBe(testValue);
// });

// test("getRole() should return \"Intern\"", () => {
//   const testValue = "Intern";
//   const e = new Intern("Foo", 1, "test@test.com", "UCLA");
//   expect(e.getRole()).toBe(testValue);
// });

// test("Can get school via getSchool()", () => {
//   const testValue = "UCLA";
//   const e = new Intern("Foo", 1, "test@test.com", testValue);
//   expect(e.getSchool()).toBe(testValue);
// });
