import React from 'react';

export default function CommentsForm({ onAddComment }) {
    const [formData, setFormData] = React.useState({
        username: '',
        remarks: '',
        rating: 5,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((currData) => ({
            ...currData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = formData.username.trim();
        const remarks = formData.remarks.trim();
        const rating = Number(formData.rating);

        if (!username || !remarks || !Number.isFinite(rating)) {
            return;
        }

        onAddComment?.({
            username,
            remarks,
            rating,
        });

        setFormData({
            username: '',
            remarks: '',
            rating: 5,
        });
    };

    return (
        <div>
            <h4>Comments Form</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter username"
                    required
                />
                <br />

                <label htmlFor="remarks">Remarks</label>
                <textarea
                    id="remarks"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                    placeholder="Add your comments..."
                    required
                />
                <br />

                <label htmlFor="rating">Rating</label>
                <input
                    id="rating"
                    name="rating"
                    type="number"
                    min={1}
                    max={5}
                    value={formData.rating}
                    onChange={handleChange}
                    required
                />
                <br />

                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}