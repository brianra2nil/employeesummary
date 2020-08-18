const Manager = require("../lib/Manager.js");

test("Can instantiate Employee instance", () => {
  const manager = new Manager('James', 7890, 'James@company.com')
  expect(manager).toBeInstanceOf(Manager)
})

test('getName() should return employee name', () => {
  const manager = new Manager('Thomas', 1987, 'Thomas@company.com')
  expect(manager.getName()).toBe('Thomas')
})




// const Manager = require("../lib/Manager");
// const Employee = require("../lib/Employee");

// test("Can set office number via constructor argument", () => {
//   const testValue = 100;
//   const e = new Manager("Foo", 1, "test@test.com", testValue);
//   expect(e.officeNumber).toBe(testValue);
// });

// test('getRole() should return "Manager"', () => {
//   const testValue = "Manager";
//   const e = new Manager("Foo", 1, "test@test.com", 100);
//   expect(e.getRole()).toBe(testValue);
// });

// test("Can get office number via getOffice()", () => {
//   const testValue = 100;
//   const e = new Manager("Foo", 1, "test@test.com", testValue);
//   expect(e.getOfficeNumber()).toBe(testValue);
// });
