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
