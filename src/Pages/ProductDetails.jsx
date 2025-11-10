import React, { use, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { FaStar } from 'react-icons/fa6';
import axios from 'axios';


 const ProductDetails = () => {
    const navigate = useNavigate();
    const {id} = useParams();
   const [product,setProduct] = useState({});
   const {user, loading, setLoading} = use(AuthContext);
   const [refetch, setRefecth] = useState(false)
   const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');
   //console.log(product);

   const {productImage,
        productName
, _id,
        price,
        originCountry, 
        rating,
    availableQuantity,
} = product
   

   useEffect(()=>{
     if (!user?.accessToken) return;
          fetch(`http://localhost:3000/products/${id}`,{
         headers:{
        authorization: `Bearer ${user.accessToken}`
         },
         }).then(res=>res.json())
         .then(data=> {
         console.log(data);
         setProduct(data.result)
         setLoading(false)
         })
       },[user, id, refetch])

const handleDlete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://3d-model-server.vercel.app/models/${model._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Barer ${user?.accessToken}`
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/all-models");
            alert('hoise')
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

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
     
    } catch (err) {
      console.error(err);
    }
  };



    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={productImage}
      alt={productName} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{productName}</h2>
    <span>{rating}</span><FaStar></FaStar>
    <span>{price}</span>
    <div className="card-actions justify-end">
      <button onClick={handleDlete} className="btn btn-secondary">Watch</button>
      <button onClick={handleDlete} className="btn btn-secondary">Import Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductDetails;