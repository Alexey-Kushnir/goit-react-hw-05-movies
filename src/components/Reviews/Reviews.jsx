import { ReviewItem } from './../ReviewItem/ReviewItem';

export const Reviews = items => {
  return (
    <ul>
      {items.map(() => {
        return (
          <ReviewItem key={id} id={id} author={authorname} text={reviewText} />
        );
      })}
    </ul>
  );
};
