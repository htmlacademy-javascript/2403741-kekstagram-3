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

// Функция переводит и сравнивает значения в минуты и проверяет находится ли время в интервале
function checkEndsOfTimes(workTimeStart, workTimeEnd, meetStart, meetDuration) {
  // Создаем функцию внутри функци, чтобы можно было использовать функцию внутри функции пока выполняется функция
  const getTime = (time) => time.split(':').reduce((acc, item, idx) => acc + (idx === 0 ? Number(item) * 60 : Number(item)), 0);
  const meetStartTime = getTime(meetStart);
  const meetTotalDuration = meetStartTime + meetDuration;

  return meetStartTime >= getTime(workTimeStart) && meetTotalDuration <= getTime(workTimeEnd);
}

checkEndsOfTimes('08:00', '17:30', '14:00', 90);
checkEndsOfTimes('8:0', '10:0', '8:0', 120);
checkEndsOfTimes('08:00', '14:30', '14:00', 90);
checkEndsOfTimes('14:00', '17:30', '08:0', 90);
checkEndsOfTimes('8:00', '17:30', '08:00', 900);
