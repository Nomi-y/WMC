import { assertEquals, assertThrows } from "@std/assert";
import { to_roman, from_roman } from "./main.js";

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

Deno.test("Single digit Roman numerals", () => {
  assertEquals(from_roman("I"), 1);
  assertEquals(from_roman("II"), 2);
  assertEquals(from_roman("III"), 3);
  assertEquals(from_roman("IV"), 4);
  assertEquals(from_roman("V"), 5);
  assertEquals(from_roman("IX"), 9);
});

Deno.test("Tens Roman numerals", () => {
  assertEquals(from_roman("X"), 10);
  assertEquals(from_roman("XIV"), 14);
  assertEquals(from_roman("XIX"), 19);
  assertEquals(from_roman("XX"), 20);
  assertEquals(from_roman("XL"), 40);
  assertEquals(from_roman("L"), 50);
  assertEquals(from_roman("XC"), 90);
  assertEquals(from_roman("C"), 100);
});

Deno.test("Hundreds Roman numerals", () => {
  assertEquals(from_roman("CD"), 400);
  assertEquals(from_roman("D"), 500);
  assertEquals(from_roman("CM"), 900);
  assertEquals(from_roman("M"), 1000);
});

Deno.test("Large Roman numerals", () => {
  assertEquals(from_roman("MCMLXXXVII"), 1987);
  assertEquals(from_roman("MMMCMXCIX"), 3999);
});

Deno.test("Edge cases", () => {
  assertEquals(from_roman("0"), 0);
});
