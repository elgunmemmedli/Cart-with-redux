import axios from "axios";
export const CATEGORY_GET = 'CATEGORY_GET';

const categories = (category)=>{
    return {
        type : CATEGORY_GET,
        payload : category
    }
}

export const getCategories = ()=>{
    return async dispatch =>{
        const {data} = await axios.get('https://fakestoreapi.com/products/categories');
        dispatch(categories(data));
    }
}