const createComment = ({ avatar, message, name }, { COMMENT_WIDTH, COMMENT_HEIGHT }) => {
  const comment = document.createElement('li');
  comment.classList.add('social__comment');

  const commentImg = document.createElement('img');
  commentImg.classList.add('social__picture');
  commentImg.src = avatar;
  commentImg.alt = name;
  commentImg.width = COMMENT_WIDTH;
  commentImg.height = COMMENT_HEIGHT;

  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = message;

  comment.append(commentImg);
  comment.append(commentText);

  return comment;
};

export { createComment };
