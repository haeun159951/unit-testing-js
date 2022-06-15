const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");
jest.mock("../product_client");

describe("product service", () => {
  const fetchItems = jest.fn(async () => [
    { item: "milk", available: true },
    { item: "banana", available: false },
  ]);

  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
    fetchItems.mockClear();
    ProductClient.mockClear();
  });
  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items).toEqual([{ item: "milk", available: true }]);
  });
});
