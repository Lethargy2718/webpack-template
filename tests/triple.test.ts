import { test, expect } from "@jest/globals";
export const triple = (a: number) => a * 3;

test("the double of 2 is 4!", () => {
    expect(triple(2)).toBe(6);
});
