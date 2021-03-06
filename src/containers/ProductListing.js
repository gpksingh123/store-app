import React, {useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from "react-redux";
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent'

const ProductListing = () => {
    //Takes argument of the state and then return us the state
    console.log("All Product")
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
   

        const getProducts = async () => {
            const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
                console.log("Err",err)
            });
            dispatch(setProducts(response.data));
        };

        useEffect(()=>{
            console.log("useEffect called")
            getProducts();
        },[]);
        console.log("Products in listing",products)
    
    return (
        <div className="ui grid">
        <ProductComponent className="ui grid"/>
      </div>
    )
}

export default ProductListing