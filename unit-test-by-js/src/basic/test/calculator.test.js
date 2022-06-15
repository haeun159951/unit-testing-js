const Calculator = require("../../calculator.js");

describe("calculator test", () => {
  test("constructor", () => {
    const cal = new Calculator();
    expect(cal.value).toBe(0);
  });

  test("set", () => {
    const cal = new Calculator();
    cal.set(2);
    expect(cal.value).toBe(2);
  });

  test("clear", () => {
    const cal = new Calculator();
    cal.set(2);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  test("add", () => {
    const cal = new Calculator();
    cal.set(2);
    cal.add(2);
    expect(cal.value).toBe(4);
  });

  test("add should throw an error if value is greater than 100", () => {
    const cal = new Calculator();

    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  test("subtract", () => {
    const cal = new Calculator();
    cal.set(5);
    cal.subtract(2);
    expect(cal.value).toBe(3);
  });

  test("multiply", () => {
    const cal = new Calculator();
    cal.set(5);
    cal.multiply(2);
    expect(cal.value).toBe(10);
  });

  describe("divide", () => {
    const cal = new Calculator();
    test("0/0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    test("1/0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    test("3/3 === 1", () => {
      cal.set(3);
      cal.divide(3);
      expect(cal.value).toBe(1);
    });
  });
});
