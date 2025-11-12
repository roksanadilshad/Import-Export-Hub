import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import ProductCard from "../Components/ProductCArd";
import ImportCard from "./ImportCard";

const MyImports = () => {
       const { user, loading, setLoading } = useContext(AuthContext);
       const [products, setProducts] = useState([]);
     //console.log(user);
     
  useEffect(() => {
       if (!user?.accessToken) return;
   
       // setLoading(true);
       fetch(`http://localhost:3000/my-imports?email=${user.email}`, {
         headers: {
           authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {

        const margeProduct = [];

        data.forEach((importItem)=>{
            const existing = margeProduct.find(
                (p) => p.productId === importItem.productId
            );
            if(existing){
                existing.quantity += importItem.quantity || 0;
                     
            }
            else{
                margeProduct.push({...importItem})
            }
        })
        //console.log(margeProduct);
        setProducts(margeProduct);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching imports:", err);
        setLoading(false);
      });
  }, [user, setLoading]);

  if (loading) {
    return <div>Please wait... Loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
        {products.map((products) => (
          <ImportCard key={products._id} setProducts={setProducts} products={products} />
        ))}
      </div>
    </div>
  );
};

export default MyImports;
