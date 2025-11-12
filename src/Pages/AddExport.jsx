import React from 'react';

const AddExport = () => {
    return (
          <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Product</h2>
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label font-medium">Product Name</label>
            <input
              type="text"
              name="productName"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>
          {/* {/"seeDetails":"See Details","createdAt":"2025-11-10T10:30:00Z","exporterEmail":"exporter1@tradehub.com"} */} 
          {/* Thumbnail URL */}
          <div>
            <label className="label font-medium">Product Image</label>
            <input
              type="url"
              name="productImage"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          {/* price */}
          <div>
            <label className="label font-medium">Price</label>
            <input
              type="text"
              name="price"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter Product Price"
            />
          </div> 
          {/* Origin country */}
          <div>
            <label className="label font-medium">Origin Country</label>
            <input
              type="text"
              name="originCountry"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Origin Country"
            />
          </div> 
          <div>
            <label className="label font-medium">Available Quantity</label>
            <input
              type="text"
              name="availableQuantity"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Available Quantity"
            />
          </div> 
          <div>
            <label className="label font-medium">Rating</label>
            <input
              type="text"
              name="rating"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Ratings"
            />
          </div>       
          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-secondary border-white"
          >
            Add Export
          </button>
        </form>
      </div>
    </div>
    );
};

export default AddExport;