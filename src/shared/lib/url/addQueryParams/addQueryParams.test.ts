import { getQueryParams } from "./addQueryParams";

describe("addQueryParams", () => {
  test("test with one param", () => {
    const params = getQueryParams({
      test: "value",
    });

    expect(params).toBe("?test=value")
  });

  test("test with multiple params", () => {
    const params = getQueryParams({
      test: "value",
      search: "123",
      date: "01.01.2025",
    });

    expect(params).toBe("?test=value&search=123&date=01.01.2025")
  });

  test("test with undefined", () => {
    const params = getQueryParams({
      test: "value",
      search: "123",
      date: undefined,
    });

    expect(params).toBe("?test=value&search=123")
  });
});
