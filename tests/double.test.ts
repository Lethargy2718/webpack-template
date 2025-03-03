import { test, expect } from "@jest/globals";
export const double = (a: number) => a * 2;

test("the double of 2 is 4!", () => {
    expect(double(2)).toBe(4);
});
