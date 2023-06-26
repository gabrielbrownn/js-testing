import { test, expect } from "vitest";

import { add } from "./math";

test("should summarize all numbers values in an array", () => {
  //Arrange
  const numbers = [4, 5];
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  //Act
  const result = add(numbers);
  //Assert
  expect(result).toBe(expectedResult);
});

test("should return NaN if at least one invalid number is provide", () => {
  const inputs = ["invalid", 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

test("should return a correct sum if an array of numeric string values is provided", () => {
  const numbers = ["1", "2"];

  const expectedResult = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );

  const result = add(numbers);

  expect(result).toBe(expectedResult);
});

test("should return 0 if an empty array is provided", () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

test("should throw an error if no value is passed into the function", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});
