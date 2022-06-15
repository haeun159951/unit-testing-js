const fetchProduct = require("../../async.js");
const async = require("../../async");

describe("calculator test", () => {
  test("async", () => {
    // test code here
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  test("async - await", async () => {
    // test code here
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  test("async - resolves", () => {
    // test code here
    expect(fetchProduct()).resolves.toEqual({ item: "Milk", price: 200 });
  });

  test("async - reject", () => {
    // test code here
    expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
