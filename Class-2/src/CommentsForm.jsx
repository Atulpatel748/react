import React from 'react';

export default function CommentsForm() {
    const [formData, setFormData] = React.useState({
        username: '',
        remarks: '',
        rating: 5,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((CurrData) => ({
            ...CurrData,
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

    let handleinputChange = (e) => {
        const { name, value } = e.target;
        setFormData((CurrData) => ({
            ...CurrData,
            [name]: value,
        }));
    };

    let handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <h4>Comments Form</h4>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleinputChange}
                    placeholder="Enter username"
                />
                <br />

                <label htmlFor="remarks">Remarks</label>
                <textarea
                    id="remarks"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleinputChange}
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
                    onChange={handleinputChange}
                />
                <br />

                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}