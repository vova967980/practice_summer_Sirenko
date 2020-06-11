import React from 'react';
import propTypes from "prop-types"
import ButtonStyles from "./Button.module.sass"

function Button( props ) {

    return (
        <button className={ButtonStyles.btn} onClick={props.handler}>
            {props.name}
        </button>
    );
}

Button.propTypes = {
    name: propTypes.string,
    handler: propTypes.func,
};

export default Button;