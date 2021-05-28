import React from 'react';
import {useSelector} from 'react-redux';


const ProductComponent = () => {
  
    const allProducts = useSelector((state) => state);
    const {id,title} = allProducts.allProducts[0]
    console.log(id,title)

    return (
        <div >
            <div className = "four column wide">
                <div className = "">
                    <div className  = "card"></div>
                        <div className = "image">
                            <div className = "content">
                                <div className = "header">
                                    Product Component {title}
                                </div>
                            </div>

                        
                        </div>

                
                </div>
            </div>
        
        </div>
    )
}

export default ProductComponent