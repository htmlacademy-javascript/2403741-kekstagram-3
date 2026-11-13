// Фкнкция генерирует и возвращает фейковые данные
const mockDateGenerator = (mockDateQuantity) => {
  // const isNumber = (value) => Number.isNaN(Number(value));

  // Функция генерирует и возвращает случайное число из диапозона, которые указываются в параметрах
  const generateRandomNumber = (min, max) => Number((min + Math.random() * (max + 1 - min)).toFixed(0));

  // Функция генерирует и возвращает строки (имя)
  const generateRandomName = () => {
    const NAMES = [
      'Александр',
      'Анна',
      'Максим',
      'Елена',
      'Дмитрий',
      'Мария',
      'Сергей',
      'Ольга',
      'Андрей',
      'Анастасия',
      'Алексей',
      'Екатерина',
      'Иван',
      'Дарья',
      'Арте'
    ];

    return NAMES[generateRandomNumber(0, NAMES.length - 1)];
  };

  // Функция преобразует текст в массив строк (предложений) и возвращает его
  const getSentencesFromText = (text) => {
    const segmentedText = (new Intl.Segmenter('ru', { granularity: 'sentence' })).segment(text);
    return Array.from(segmentedText, (segment) => segment.segment.trim());
  };

  // Функция возвращает строку, в виде определенного количество предложений из массива предложений
  // Первое предложение выбирается случайным образом внутри функции
  const getSentencesQuantityByNumber = (sentencesArr, number) => {
    if (number > sentencesArr.length || number === sentencesArr.length) {
      return sentencesArr.join(' ');
    }

    const firstSentencesIdx = generateRandomNumber(0, sentencesArr.length);

    if ((firstSentencesIdx + number) > sentencesArr.length) {
      return sentencesArr.slice(firstSentencesIdx).join(' ') + sentencesArr.slice(0, number - (sentencesArr.length - 1) - number).join(' ');
    }

    return sentencesArr.slice(firstSentencesIdx, firstSentencesIdx + number).join(' ');
  };

  // Функция генерирует случайное сообщения из текста
  const getRandomMessage = () => {
    const BASE_TEXT = 'Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!';

    const sentences = getSentencesFromText(BASE_TEXT);

    return generateRandomNumber(0, 1)
      ? getSentencesQuantityByNumber(sentences, 1)
      : getSentencesQuantityByNumber(sentences, 2);
  };

  // Функция создает и возвращает объект коментария
  const generateRandomComments = (commentsQuantity) =>
    Array.from({ length: commentsQuantity }, (item, idx) => ({
      id: idx,
      avatar: `img/avatar-${generateRandomNumber(1, 6)}.svg`,
      message: getRandomMessage(),
      name: generateRandomName()
    }));

  return Array.from({ length: mockDateQuantity }, (item, idx) => ({
    id: idx + 1,
    url: `photos/${idx + 1}.jpg`,
    description: `Картинка № ${idx + 1}`,
    likes: generateRandomNumber(15, 200),
    comments: generateRandomComments(generateRandomNumber(0, 30))
  }));
};

mockDateGenerator(25);
