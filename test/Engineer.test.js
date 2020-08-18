const Engineer = require("../lib/Engineer.js");

test("Can instantiate Employee instance", () => {
  const engineer = new Engineer('Mark', 5678, 'Mark@company.com')
  expect(engineer).toBeInstanceOf(Engineer)
})

test('getName() should return employee name', () => {
  const engineer = new Engineer('Tom', 8765, 'Tom@company.com')
  expect(engineer.getName()).toBe('Tom')
})



// const Engineer = require("../lib/Engineer");

// test("Can set GitHUb account via constructor", () => {
//   const testValue = "GitHubUser";
//   const e = new Engineer("Foo", 1, "test@test.com", testValue);
//   expect(e.github).toBe(testValue);
// });

// test("getRole() should return \"Engineer\"", () => {
//   const testValue = "Engineer";
//   const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
//   expect(e.getRole()).toBe(testValue);
// });

// test("Can get GitHub username via getGithub()", () => {
//   const testValue = "GitHubUser";
//   const e = new Engineer("Foo", 1, "test@test.com", testValue);
//   expect(e.getGithub()).toBe(testValue);
// });
