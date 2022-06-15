const check = require("../check");

describe("check test", () => {
  let onSuccess;
  let onFail;
  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });
  test("should call onSuccess when prediate is true", () => {
    check(() => true, onSuccess, onFail);
    //expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onSuccess).toHaveBeenCalledWith("yes");
    //expect(onSuccess.mock.calls[0][0]).toBe("yes");
    expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  test("should call onFail when prediate is false", () => {
    check(() => false, onSuccess, onFail);

    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith("no");
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
