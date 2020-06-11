import React          from 'react';
import FindUserStyles from './FindUser.module.sass'
import PropTypes from 'prop-types';

function FindUser( props ) {

    return (
        <div className={FindUserStyles.findUserBlock}>
            <input className={FindUserStyles.findUser} type="text" placeholder={props.placeholder}/>
        </div>
    );
}

FindUser.propTypes = {
    placeholder: PropTypes.string
};


export default FindUser;




