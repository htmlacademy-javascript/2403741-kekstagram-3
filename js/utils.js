// Функция генерирует и возвращает случайное число из диапозона, которые указываются в параметрах
const generateRandomNumber = (min, max) => Number((min + Math.random() * (max + 1 - min)).toFixed(0));

export { generateRandomNumber };
