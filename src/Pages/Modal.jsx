import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const Modal = () => {
    const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');


  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    setQuantity(value);

    if (value > product.availableQuantity) {
      setError('Quantity exceeds available stock!');
    } else {
      setError('');
    }
  };

  const handleSubmit = async () => {
    if (quantity <= 0 || quantity > product.availableQuantity) return;

    try {
      await axios.post('/api/import', {
        productId: product._id,
        quantity
      });
      onImported(quantity); // optional: update parent component state
      onClose();
    } catch (err) {
      console.error(err);
    }
  };
    return (
        <div className="modal">
      <h2>Import {product.name}</h2>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
        max={product.availableQuantity}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleSubmit} disabled={!!error || !quantity}>Submit</button>
      <button onClick={onClose}>Cancel</button>
    </div>
    );
};

export default Modal;