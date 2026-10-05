import { useState } from 'react';
import './Comments.css';

export default function CommentsForm() {
  const [comments, setComments] = useState([
    { username: '@sk', remarks: 'Great product!', rating: 4 }
  ]);

  return (
    <div className="Comments">
      <h3>Comments</h3>
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            <p><strong>{comment.username}</strong></p>
            <p>{comment.remarks}</p>
            <p>Rating: {comment.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  );
}