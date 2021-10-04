import PropTypes from 'prop-types';
import React from 'react';
import _find from 'lodash/find';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import Layout from '../../../components/Layout/Layout';
import ProductList from './ProductList';
import Summary from './Summary';
import { PRODUCTS, PROMOTIONS, TAX } from '../../../common/Constants';

function Cart() {
    const CLONE_PRODUCTS = JSON.parse(JSON.stringify(PRODUCTS));
    const [products, setProducts] = React.useState(CLONE_PRODUCTS);
    const [promoCode, setPromoCode] = React.useState("");
    const [discountPercent, setDiscountPercent] = React.useState(1);

    const itemCount = products.reduce((quantity, product) => {
        return quantity + +product.quantity;
    }, 0);
    const subTotal = products.reduce((total, product) => {
        return total + product.price * +product.quantity;
    }, 0);
    const discount = (subTotal * discountPercent) / 100;

    const onChangeProductQuantity = (index, event) => {
        const value = event.target.value;
        const valueInt = parseInt(value);
        const cloneProducts = [...products];

        if (value === "") {
            cloneProducts[index].quantity = value;
        } else if (valueInt > 0 && valueInt < 100) {
            cloneProducts[index].quantity = valueInt;
        }
        console.log(cloneProducts, products, PRODUCTS);
        setProducts(cloneProducts);
    };

    const onRemoveProduct = (i) => {
        const filteredProduct = products.filter((product, index) => {
            return index != i;
        });
        setProducts(filteredProduct);
    };

    const onEnterPromoCode = (event) => {
        setPromoCode(event.target.value);
    };

    const checkPromoCode = () => {
        for (var i = 0; i < PROMOTIONS.length; i++) {
            /* istanbul ignore next */
            if (promoCode === PROMOTIONS[i].code) {
                setDiscountPercent(parseFloat(PROMOTIONS[i].discount.replace("%", "")));
                return;
            }
        }
        alert("Sorry, the Promotional code you entered is not valid!");
    };

    return (
        <div className='cartPage'>
            <Layout itemCount={itemCount} />
            <div className="container"><span className="count">{itemCount} items in the bag</span></div>
            {products.length > 0 ? (
                <div>
                    <ProductList
                        products={products}
                        onChange={onChangeProductQuantity}
                        onRemoveProduct={onRemoveProduct}
                    />
                    <Summary
                        subTotal={subTotal}
                        discount={discount}
                        tax={TAX}
                        onEnterPromoCode={onEnterPromoCode}
                        checkPromoCode={checkPromoCode}
                    />
                </div>
            ) : (
                <div className="empty-product">
                    <h3>There are no products in your cart.</h3>
                    <button onClick={() => setProducts(PRODUCTS)}>Shopping now</button>
                </div>
            )}
        </div>
    );
}

Cart.propTypes = {
    products: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Cart.defaultProps = {
    products: ''
};

export default Cart;