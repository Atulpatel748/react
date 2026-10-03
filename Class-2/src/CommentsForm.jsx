import React from 'react';

export default function CommentsForm() {
    const [formData, setFormData] = React.useState({
        username: '',
        remarks: '',
        rating: 5,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);

        // Reset form after submission
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
                />
                <br />

                <label htmlFor="remarks">Remarks</label>
                <textarea
                    id="remarks"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                    placeholder="Add your comments..."
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
                />
                <br />

                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}