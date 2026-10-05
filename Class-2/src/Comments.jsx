import { useState } from 'react';
import './Comments.css';
import CommentsForm from './CommentsForm';

export default function Comments() {
    const [comments, setComments] = useState([
        { username: '@sk', remarks: 'Great product!', rating: 4 }
    ]);

    function addComment(newComment) {
        setComments((currComments) => [...currComments, newComment]);
    }

    return (
        <div className="Comments">
            <h3>Comments</h3>
            <div>
                {comments.map((comment, index) => (
                    <div key={`${comment.username}-${index}`}>
                        <p><strong>{comment.username}</strong></p>
                        <p>{comment.remarks}</p>
                        <p>Rating: {comment.rating}/5</p>
                    </div>
                ))}
            </div>
            <CommentsForm onAddComment={addComment} />
        </div>
    );
}