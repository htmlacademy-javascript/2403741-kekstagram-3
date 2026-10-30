// eslint-disable-next-line no-unused-vars
function checkStrLength(str, maxLength) {
  return str.length <= maxLength;
}

// eslint-disable-next-line no-unused-vars
function isStrPalindrome(str) {
  const modifiedStr = str.toLowerCase().replaceAll(' ', '');
  return modifiedStr === [...modifiedStr].reverse().join('');
}

// eslint-disable-next-line no-unused-vars
function getNumFromValue(value) {
  if ((typeof value) === 'string' && value.trim() === '') {
    return NaN;
  }

  // const newStr = String(value).replace(/\D/g, '');

  const newStr = [...((typeof value === 'number') ? value.toString() : value)].reduce((acc, elem) =>
    elem.trim() !== '' && !Number.isNaN(Number(elem)) ? acc + elem : acc, '');

  return newStr.length === 0 ? NaN : Number(newStr);
}
