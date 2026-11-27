import { isEscapeKey } from './utils.js';
import { COMMENTS_DISPLAY, commentConfig } from './configs.js';
import { createCommentsFragment } from './create-comments-fragment.js';

// Функция создает полноэкранный экран
function createFullscreen(fullScreenElem, {
  url,
  description,
  likes: likesCount,
  comments
}) {
  const fullScreenPicture = fullScreenElem.querySelector('.big-picture__img img');
  const likesCountElem = fullScreenElem.querySelector('.likes-count');
  const commentsShownCountElem = fullScreenElem.querySelector('.social__comment-shown-count');
  const commentsTotalCountElem = fullScreenElem.querySelector('.social__comment-total-count');
  const commentsListElem = fullScreenElem.querySelector('.social__comments');
  const pictureDescription = fullScreenElem.querySelector('.social__caption');
  const commentsLoaderBtn = fullScreenElem.querySelector('.comments-loader');
  const closeBtn = fullScreenElem.querySelector('.big-picture__cancel');
  const totalComments = comments.length;
  let shownCommentsCount = Math.min(COMMENTS_DISPLAY, totalComments);

  fullScreenPicture.src = url;
  fullScreenPicture.alt = description;
  likesCountElem.textContent = likesCount;
  commentsShownCountElem.textContent = shownCommentsCount;
  commentsTotalCountElem.textContent = totalComments;
  pictureDescription.textContent = description;
  commentsListElem.innerHTML = '';

  commentsListElem.append(createCommentsFragment(comments, 0, COMMENTS_DISPLAY, totalComments, commentConfig));

  const addCommentsToView = () => {
    const nextMaxCommentsCount = shownCommentsCount + COMMENTS_DISPLAY;
    commentsShownCountElem.textContent = Math.min(nextMaxCommentsCount, totalComments);

    commentsListElem.append(createCommentsFragment(comments, shownCommentsCount, nextMaxCommentsCount, totalComments, commentConfig));
    shownCommentsCount = nextMaxCommentsCount;
  };

  const onEscapeKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      closeFullscreen();
    }
  };

  const onClosePictureClicked = (evt) => {
    evt.preventDefault();
    closeFullscreen();
  };

  document.addEventListener('keydown', onEscapeKeydown);
  closeBtn.addEventListener('click', onClosePictureClicked);
  commentsLoaderBtn.addEventListener('click', addCommentsToView);

  function closeFullscreen() {
    fullScreenElem.classList.add('hidden');
    document.removeEventListener('keydown', onEscapeKeydown);
    closeBtn.removeEventListener('click', onClosePictureClicked);
    commentsLoaderBtn.removeEventListener('click', addCommentsToView);
    document.querySelector('body').classList.remove('modal-open');
  }

  document.body.classList.add('modal-open');
  fullScreenElem.classList.remove('hidden');
}

export { createFullscreen };
