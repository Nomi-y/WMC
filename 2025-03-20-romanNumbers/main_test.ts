import { assertEquals, assertThrows } from "@std/assert";
import { to_roman } from "./main.js";

Deno.test("Single digit Roman numerals", () => {
  assertEquals(to_roman(1), "I");
  assertEquals(to_roman(2), "II");
  assertEquals(to_roman(3), "III");
  assertEquals(to_roman(4), "IV");
  assertEquals(to_roman(5), "V");
  assertEquals(to_roman(9), "IX");
});

Deno.test("Tens Roman numerals", () => {
  assertEquals(to_roman(10), "X");
  assertEquals(to_roman(14), "XIV");
  assertEquals(to_roman(19), "XIX");
  assertEquals(to_roman(20), "XX");
  assertEquals(to_roman(40), "XL");
  assertEquals(to_roman(50), "L");
  assertEquals(to_roman(90), "XC");
  assertEquals(to_roman(100), "C");
});

Deno.test("Hundreds Roman numerals", () => {
  assertEquals(to_roman(400), "CD");
  assertEquals(to_roman(500), "D");
  assertEquals(to_roman(900), "CM");
  assertEquals(to_roman(1000), "M");
});

Deno.test("Large Roman numerals", () => {
  assertEquals(to_roman(1987), "MCMLXXXVII");
  assertEquals(to_roman(3999), "MMMCMXCIX");
});

Deno.test("Edge cases", () => {
  assertEquals(to_roman(0), "0");
  assertThrows(() => to_roman(4000), Error, "Parameter is not in range! (0 - 3999)");
  assertThrows(() => to_roman(-1), Error, "Parameter is not in range! (0 - 3999)");
});