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

function convert() {
    const input = document.getElementById("input").value.trim();

    let result;
    let inputAsNum = Number(input);
    try {
        if (!Number.isNaN(inputAsNum)) result = to_roman(inputAsNum);
        else result = from_roman(input.toUpperCase());
    } catch {
        result = "Unable to convert " + input
    }
    document.getElementById("output").value = result;
}

function to_roman(a) {
    if (Math.floor(a) !== a) throw new Error("Parameter is not an integer!")
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

function from_roman(str) {
    if (typeof str !== "string") throw new Error("Parameter is not a valid string!")
    if (str == "0") return 0
    let res = 0
    let i = 0
    while (i < str.length) {
        const s1 = value(str.charAt(i))
        if (i + 1 < str.length) {
            const s2 = value(str.charAt(i + 1))
            if (s1 >= s2) {
                res += s1
                i++
            } else {
                res += s2 - s1
                i += 2
            }
        } else {
            res += s1
            i++
        }
    }
    return res
}

function integerDivision(a, b) {
    let x = 0
    while (a >= b) {
        a -= b
        x++
    }
    return { x, a }
}

function value(symbol) {
    for (const [s, value] of ROMAN_NUMERALS) {
        if (s === symbol) return value
    }
    return null
}

window.convert = convert;
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("convertBtn").addEventListener("click", convert);
});