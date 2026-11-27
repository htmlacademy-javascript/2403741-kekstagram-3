import { createComment } from './create-comment.js';

const createCommentsFragment = (comments, startElem, endElem, commentsCount, commentConfig) => {
  const commentsFragment = document.createDocumentFragment();

  for (let i = startElem; i < endElem && i < commentsCount; i++) {
    commentsFragment.append(createComment(comments[i], commentConfig));
  }

  return commentsFragment;
};

export { createCommentsFragment };
