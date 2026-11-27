import { generateRandomNumber } from './utils';

// Фкнкция генерирует и возвращает фейковые данные
const mockDateGenerator = (config) => {
  // Функция генерирует и возвращает строки (имя)
  const generateRandomName = () => config.NAMES[generateRandomNumber(0, config.NAMES.length - 1)];

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
      ? getSentencesQuantityByNumber(sentences, config.MIN_SENTENCES_QUANTITY)
      : getSentencesQuantityByNumber(sentences, config.MAX_SENTENCES_QUANTITY);
  };

  // Функция создает и возвращает объект коментария
  const generateRandomComments = (commentsQuantity) =>
    Array.from({ length: commentsQuantity }, (_, idx) => ({
      id: idx,
      avatar: `img/avatar-${generateRandomNumber(1, 6)}.svg`,
      message: getRandomMessage(),
      name: generateRandomName()
    }));

  return Array.from({ length: config.MOCK_DATA_QUANTITY }, (_, idx) => ({
    id: idx + 1,
    url: `photos/${idx + 1}.jpg`,
    description: `Картинка № ${idx + 1}`,
    likes: generateRandomNumber(config.MIN_LIKES_QUANTITY, config.MAX_LIKES_QUANTITY),
    comments: generateRandomComments(generateRandomNumber(config.MIN_COMMENTS_QUANTITY, config.MAX_COMMENTS_QUANTITY))
  }));
};

export { mockDateGenerator };
