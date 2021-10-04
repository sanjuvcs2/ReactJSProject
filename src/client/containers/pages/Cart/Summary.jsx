import React from 'react';
import PropTypes from 'prop-types';
import { formatCurrency } from '../../../common/Utils/Utils';

function Summary({
  subTotal,
  discount,
  tax,
  onEnterPromoCode,
  checkPromoCode
}) {
  const total = subTotal - discount + tax;
  return (
    <section className="container" id="summary">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promCode" onChange={onEnterPromoCode} />
        <button type="button" onClick={checkPromoCode} />
      </div>

      <div className="summary">
        <ul>
          <li>
            Subtotal <span>{formatCurrency(subTotal)}</span>
          </li>
          {discount > 0 && (
            <li>
              Discount <span>{formatCurrency(discount)}</span>
            </li>
          )}
          <li>
            Tax <span>{formatCurrency(tax)}</span>
          </li>
          <li className="total">
            Total <span>{formatCurrency(total)}</span>
          </li>
        </ul>
      </div>

      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
}

Summary.propTypes = {
  subTotal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  discount: PropTypes.number,
  tax: PropTypes.number
};

Summary.defaultProps = {
  subTotal: '',
  discount: 10,
  tax: ''
};

export default Summary;