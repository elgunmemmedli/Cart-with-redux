import axios from 'axios';
export const PRODUCTS_GET = 'PRODUCTS_GET';

const products = (product)=>{
    return {
        type : PRODUCTS_GET,
        payload : product
    }
};

export const getProducts = ()=>{
    return async dispatch => {
     const {data} = await axios.get('https://fakestoreapi.com/products');
     dispatch(products(data));
    }
    
}