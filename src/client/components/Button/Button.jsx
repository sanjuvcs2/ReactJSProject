import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const BUTTON_SIZES = ['Default', 'Lg', 'Md', 'Sm'];
const BUTTON_TYPES = ['Default', 'Primary', 'Secondary', 'Ordinary'];
const BUTTON = ['submit', 'button', 'linkbutton', 'cancel'];

/** @description Functional component to render the Button field */
const Button = props => {
    const { className, children, size, buttonType, type, onClick, isDisabled, buttonId, automationId } = props;

    const linkClass = (type === 'linkbutton' ? 'btnLink' : null);
    const buttonClass = ('btn', size ? `btn${size}` : null, `btn${buttonType}`, className, linkClass);
    return (
        /* eslint-disable react/button-has-type */
        <button
            automation-id={automationId}
            disabled={isDisabled}
            className={buttonClass}
            onClick={onClick}
            type={type}
            id={buttonId}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    buttonType: PropTypes.oneOf(BUTTON_TYPES),
    size: PropTypes.oneOf(BUTTON_SIZES),
    type: PropTypes.oneOf(BUTTON),
    automationId: PropTypes.string,
    buttonId: PropTypes.string,
    isDisabled: PropTypes.bool
};

Button.defaultProps = {
    buttonType: 'Default',
    size: 'Default',
    type: 'button',
    className: '',
    automationId: 'at-button',
    buttonId: '',
    onClick: null,
    children: null,
    isDisabled: false
};

export default Button;
