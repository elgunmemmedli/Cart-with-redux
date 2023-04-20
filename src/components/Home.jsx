import React, { useEffect } from 'react';
import Cards from './Cards';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/actions/productsActions';
const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.productsReducer);
    
    useEffect(() => {
        dispatch(getProducts());
    }, [])


    return (
        <div>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <Cards data={data} isBasket={false} />
                </div>
            </section>
        </div>
    );
}

export default Home;
