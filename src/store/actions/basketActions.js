export const BASKET_GET = "BASKET_GET";
let productsBasket = [];
if (localStorage.getItem('baskets') === null) {
    productsBasket = [];
} else {
    productsBasket = JSON.parse(localStorage.getItem('baskets'))
}

const basketProducts = (count, products) => {
    return {
        type: BASKET_GET,
        payload: {
            count,
            products
        },
    };
};

export const addBasket = (payload) => {
    if (!productsBasket.find((product) => product.id == payload.id)) {
        productsBasket.push(payload);
        localStorage.setItem("baskets", JSON.stringify(productsBasket));
    }
    return (dispatch) => {
        dispatch(basketProducts(productsBasket.length, productsBasket));
    };
};

export const removeBasket = (id) => {
    let index = productsBasket.findIndex((product) => product.id === id);
    productsBasket.splice(index, 1);
    localStorage.setItem("baskets", JSON.stringify(productsBasket));
    return (dispatch) => {
        dispatch(basketProducts(productsBasket.length, productsBasket));
    };

}