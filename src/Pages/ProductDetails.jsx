import React, { use, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const ProductDetails = () => {
    const navigate = useNavigate();
    const {id} = useParams();
   const [product,setProduct] = useState({});
   const {user, loading, setLoading} = use(AuthContext);
   const [refetch, setRefecth] = useState(false)
   

   useEffect(()=>{
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
    return (
        <div>
            <p>details</p>
        </div>
    );
};

export default ProductDetails;