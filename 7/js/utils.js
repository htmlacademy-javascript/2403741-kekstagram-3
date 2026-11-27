// Функция генерирует и возвращает случайное число из диапозона, которые указываются в параметрах
const generateRandomNumber = (min, max) => Number((min + Math.random() * (max + 1 - min)).toFixed(0));

// Функция создает шаблон узла
const getTemplate = (templateName, templateRoot, isDeepClone = true) => document.querySelector(templateName)
  .content
  .querySelector(templateRoot)
  .cloneNode(isDeepClone);

// Фуекция проверяет была ли нажата клавиша Esc
const isEscapeKey = (evt) => evt?.key === 'Escape';
export { generateRandomNumber, getTemplate, isEscapeKey };
