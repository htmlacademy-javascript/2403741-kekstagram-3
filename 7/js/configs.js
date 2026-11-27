const MockConfig = Object.freeze({
  MOCK_DATA_QUANTITY: 25,
  NAMES: [
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
    'Артеc'
  ],
  MIN_SENTENCES_QUANTITY: 1,
  MAX_SENTENCES_QUANTITY: 2,
  MIN_LIKES_QUANTITY: 15,
  MAX_LIKES_QUANTITY: 200,
  MIN_COMMENTS_QUANTITY: 0,
  MAX_COMMENTS_QUANTITY: 30,
  BASE_TEXT: 'Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
});

const RenderPictureConfig = Object.freeze({
  TEMPLATE_NAME: '#picture',
  TEMPLATE_ROOT: '.picture',
  TEMPLATE_LIKES: '.picture__likes',
  TEMPLATE_COMMENTS: '.picture__comments',
});

const COMMENTS_DISPLAY = 5;

const commentConfig = Object.freeze({
  COMMENT_WIDTH: 35,
  COMMENT_HEIGHT: 35
});

export { MockConfig, RenderPictureConfig, COMMENTS_DISPLAY, commentConfig };
