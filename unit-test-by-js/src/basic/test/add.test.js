const add = require("../../add.js");

test("add", () => {
  // test code here
  expect(add(1, 2)).toBe(3);
  expect(add(1, 3)).toBe(4);
});
