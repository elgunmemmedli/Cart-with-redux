import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const Baskets = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
      if(localStorage.getItem('baskets') !== null){
        setData(JSON.parse(localStorage.getItem('baskets')))
      }
    }, [])

    return (
        <div>
           <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
               <Cards data={data} isBasket={true} />
            </div>
        </section>
        </div>
    );
}

export default Baskets;
