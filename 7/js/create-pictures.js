import { getTemplate } from './utils.js';

function createPictures(pictureContainer, data, config) {
  const picturesInfo = new WeakMap();
  const picturesList = document.querySelector(pictureContainer);
  const picturesFragment = document.createDocumentFragment();

  const createPicture = (
    {
      url,
      description,
      likes: likesCount,
      comments: {
        length: commentsCount
      }
    },
    {
      TEMPLATE_NAME,
      TEMPLATE_ROOT,
      TEMPLATE_LIKES,
      TEMPLATE_COMMENTS
    }) => {
    const pictureTemplate = getTemplate(TEMPLATE_NAME, TEMPLATE_ROOT);

    const img = pictureTemplate.querySelector('img');
    img.src = url;
    img.alt = description;

    const likes = pictureTemplate.querySelector(TEMPLATE_LIKES);
    likes.textContent = likesCount;

    const comments = pictureTemplate.querySelector(TEMPLATE_COMMENTS);
    comments.textContent = commentsCount;

    return pictureTemplate;
  };

  data.forEach((pictureData) => {
    const picture = createPicture(pictureData, config);
    picturesInfo.set(picture, pictureData);
    picturesFragment.append(picture);
  });

  picturesList.append(picturesFragment);

  return picturesInfo;
}

export { createPictures };
