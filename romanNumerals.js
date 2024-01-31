/** Pseudocode:
 * function takes input num
 * variable output set to empty string
 * romanNumeralToArabic object
 * loop through object
 * do the math
 * when num == 0 return output
 */
function toRomanLazy(num) {
  let romanNumeral = '';
  const romanNumeralToArabic = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1,
  }

  for (const key in romanNumeralToArabic) {
    let val = romanNumeralToArabic[key];
    while (val <= num) {
      num -= val;
      romanNumeral += key
    }
  }

  return romanNumeral
}

console.log(toRomanLazy(9))

function toRoman(num) {
  let romanNumeral = '';
  const romanNumeralToArabic = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1,
  }

  for (const key in romanNumeralToArabic) {
    let val = romanNumeralToArabic[key];
    while (val <= num) {
      num -= val;
      romanNumeral += key
    }
  }

  return romanNumeral
}

module.exports = { toRoman, toRomanLazy };
