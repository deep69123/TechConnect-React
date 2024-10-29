import React, { useState } from 'react';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', imageFile);
        formData.append('description', description);

        try {
            const response = await fetch('http://localhost:3000/api/products', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert("Product added successfully!");
                setName('');
                setDescription('');
                setImageFile(null);
            } else {
                alert("Failed to add product.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while adding the product.");
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Add New Product</h1>
            <form onSubmit={handleFormSubmit} style={styles.form}>
                <label htmlFor="name" style={styles.label}>Product Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={styles.input}
                />

                <label htmlFor="description" style={styles.label}>Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    style={styles.textarea}
                />

                <label htmlFor="image" style={styles.label}>Upload Image:</label>
                <input
                    type="file"
                    id="image"
                    onChange={(e) => setImageFile(e.target.files[0])}
                    accept="image/*"
                    required
                    style={styles.fileInput}
                />

                <button type="submit" style={styles.button}>Add Product</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        width: '600px',
        margin: '0 auto',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        paddingRight: '40px',
    },
    header: {
        textAlign: 'center',
        color: '#333',
    },
    label: {
        display: 'block',
        margin: '10px 0 5px',
        color: '#555',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '5px 0 15px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '16px',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        margin: '5px 0 15px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '16px',
    },
    fileInput: {
        width: '100%',
        padding: '10px',
        margin: '5px 0 15px',
        fontSize: '16px',
        border: 'none',
    },
    button: {
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 15px',
        fontSize: '18px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        display: 'block',
        margin: '0 auto',
    },
};

export default AddProduct;
