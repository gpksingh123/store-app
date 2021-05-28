import React, {useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from "react-redux";
import ProductComponent from './ProductComponent'

const ProductListing = () => {
    //Takes argument of the state and then return us the state
    console.log("All Product")
    const products = useSelector((state) => state);
    console.log(products)

        const getProducts = async () => {
            const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
                console.log("Err",err)
            });
            console.log(response)
        };

        useEffect(()=>{
            console.log("useEffect called")
            getProducts();
        },[]);

    return (
    <div>
        Product Listing
        <ProductComponent />
    </div>
    )
}

export default ProductListing