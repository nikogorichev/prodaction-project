import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with additional class", () => {
    const expected = "someClass additionalClass1 additionalClass2";
    expect(
      classNames("someClass", {}, ["additionalClass1", "additionalClass2"])
    ).toBe(expected);
  });

  test("with mod class", () => {
    const expected = "someClass additionalClass1 modeClass";
    expect(
      classNames("someClass", { modeClass: true }, ["additionalClass1"])
    ).toBe(expected);
  });

  test("with mod class false", () => {
    const expected = "someClass additionalClass1 modeClass";
    expect(
      classNames("someClass", { modeClass: true, hovered: false }, [
        "additionalClass1",
      ])
    ).toBe(expected);
  });
});
