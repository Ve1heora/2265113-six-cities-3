import { Comment } from '../../types/comments';

type CommentItemProps = {
  comment: Comment;
};

export const CommentItem = ({comment}: CommentItemProps) => {
  const formattedDate = new Date(comment.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long'});

  return (
    <li className="reviews__item" data-testid='commentItem'>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${comment.rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={comment.date}>{formattedDate}</time>
      </div>
    </li>
  );
};
