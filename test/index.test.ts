import { expect, test } from "bun:test";
import { greet } from '../src'


test("Greet fn", () => {
	const name = "World"
	expect(greet(name)).toBe(`Hello, ${name}!`);
});