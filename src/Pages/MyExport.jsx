import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import AddExport from './AddExport';
import ExportCard from '../Components/ExportCard';

const MyExport = () => {
     const {user} = use(AuthContext)
    const [products, setproducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    
    useEffect(()=> {

        fetch(`http://localhost:3000/my-exports?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
        .then(res=> res.json())
        .then(data=> {
            
            setproducts(data)
            setLoading(false)
        })

    }, [user])

    if(loading) {
        return <div> Please wait ... Loading...</div>
    }

    return (
        <div>
            <div>

            <title>My Export</title>
            </div>
            <h2 className='border-b-4 border-secondary w-120 mx-auto  font-bold text-4xl text-center text-accent my-10'>MY EXPORT PRODUCTS</h2>
           <div className='w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-10'>
            {products.map(products => <ExportCard key={products._id} setproducts={setproducts} products={products}></ExportCard>)}
           </div>
        </div>
    );
};

export default MyExport;