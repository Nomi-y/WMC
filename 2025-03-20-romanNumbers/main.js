const ROMAN_NUMERALS = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1]
];

export function to_roman(a) {
  if (Math.floor(a) !== a) throw new Error("Parameter is not in integer!")
  if (a >= 4000 || a < 0) throw new Error("Parameter is not in range! (0 - 3999)")
  if (a === 0) return "0"
  let romanNumber = ""
  for (const [symbol, value] of ROMAN_NUMERALS) {
    const { x: result, a: remainder } = integerDivision(a, value)
    a = remainder
    for (let i = 0; i < result; i++) {
      romanNumber += symbol
    }
  }
  return romanNumber
}

function integerDivision(a, b) {
  let x = 0
  while (a >= b) {
    a -= b
    x++
  }
  return { x, a }
}


// deno run main.js
if (import.meta.main) {
  const input = prompt("Enter a number (0-3999):");
  if (input !== null) {
    const num = Number(input);
    try {
      console.log(`Roman numeral: ${to_roman(num)}`);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
}

