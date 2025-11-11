import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router';

const ImportCard = ({products}) => {
    console.log(products);
    const {productImage,
        productName, _id,
        price,
        originCountry, 
        rating,
    availableQuantity,
    productId
} = products
    
    return (
        <div>
           <div className="card h-full  bg-neutral w-full shadow-sm rounded-2xl">
    <div className="relative">
    <img
      src={productImage}
      alt={productName}
      className="h-100 w-full object-cover rounded-t-2xl"
    />

    {/* Shopping cart icon */}
    <FiShoppingCart className="absolute top-3 left-3 text-3xl bg-secondary text-primary p-1 rounded cursor-pointer hover:bg-primary hover:text-accent transition-all" />

    {/* Heart icon */}
    <FaHeart className="absolute top-3 right-3 text-3xl text-secondary hover:text-primary cursor-pointer transition-all" />
  </div>
  <div className="text-center text-primary">
    <h2 className="text-2xl font-semibold text-primary">{productName
}</h2>
    <div className='flex justify-evenly items-center'>
    <span>Available:{availableQuantity}</span>
    <span>Price:{price}$</span>
    </div>
    <div className='flex justify-center items-center'>
         <span className='flex justify-evenly items-center'>{rating}<FaStar className='text-amber-400'></FaStar></span>
     
    </div>
    <span>Made in {originCountry}</span>
    <span>
        
        </span>
    
    <div className="card-actions justify-end">
      <Link to={`/productDetails/${productId}`} className="btn border-white btn-secondary w-full">See Details</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ImportCard;