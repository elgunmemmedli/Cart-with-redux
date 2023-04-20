import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../store/actions/categoryActions';
import { NavLink } from 'react-router-dom';
const Navbar = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.categoryReducer);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const { count } = useSelector((state) => state.basketReducer);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100" style={{ zIndex: 999 }}>
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="#!">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink></li>
                            <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {
                                        data.map((item, index) => (
                                            <li key={index}><a className="dropdown-item" href="#!">{item}</a></li>
                                        ))
                                    }
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-dark" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Cart
                                <NavLink to='/basket' className="badge bg-dark text-white ms-1 rounded-pill"> { localStorage.getItem('baskets') ? JSON.parse(localStorage.getItem('baskets')).length : 0 } </NavLink>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
