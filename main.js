function powNumber(number, pow) {
  if (number < 0) {
    return "Number can`t to be < 0";
  } else if (number === 0) {
    return 0;
  }

  if (pow === 0) {
    return 1;
  }

  return pow > 0
    ? number * powNumber(number, pow--)
    : 1 / powNumber(number, Math.abs(pow));
}

console.log(powNumber(5, 0));
