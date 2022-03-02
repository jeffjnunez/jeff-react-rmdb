import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { Wrapper } from './Button.styles';

const Button = ({ text, callback, invertColors }) => (
    <Wrapper type="button" onClick={callback} invertColors={invertColors}>
        {text}
    </Wrapper>
);

Button.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func,
    invertColors: PropTypes.bool
};

export default Button;