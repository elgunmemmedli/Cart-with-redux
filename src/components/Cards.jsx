import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { addBasket, removeBasket } from '../store/actions/basketActions';
const Cards = ({ data,isBasket }) => {
    const dispatch = useDispatch();
    const [basketsP,setBaskets] = useState(data);

    const baskets = (item) => {
        dispatch(addBasket(item))
    }

    const RemoveBaskets = (ind, item) => {
        dispatch(removeBasket(ind));
        setBaskets( data.filter(element =>{
            return element !== item;
        }))
        let index = data.findIndex((product) => product.id === ind);
        data.splice(index,1);
    };


    useEffect(()=>{
        setBaskets(data);
    }, [data])

    


    return (
        <div>
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                    basketsP.map(item => (
                        <div key={item.id} className="col mb-5">
                            <div className="card h-100">

                                <img className="card-img-top" src={item.image} alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder"> {item.title} </h5>
                                        ${item.price}
                                    </div>
                                </div>
                                <div className={!isBasket ? 'card-footer p-4 pt-0 border-top-0 bg-transparent' : 'd-none'}>
                                    <div className="text-center"><button type='button' onClick={() => baskets(item)} className="btn btn-outline-dark mt-auto" href="#">Add Basket</button></div>
                                </div>

                                <div className={isBasket ? 'card-footer p-4 pt-0 border-top-0 bg-transparent' : 'd-none'}>
                                    <div className="text-center"><button type='button' onClick={() => RemoveBaskets(item.id, item)} className="btn btn-outline-dark mt-auto" href="#">Remove Basket</button></div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Cards;
