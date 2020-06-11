import React          from 'react';
import FindUserStyles from './FindUser.module.sass'
import PropTypes      from 'prop-types';
import AppContext     from "../../store";
import withContext    from "../HoCs/withContext";

function FindUser( props ) {
    const {setUsernameValue} = props;

    const inputOnChange = (e) => {
        setUsernameValue(e.target.value);
    };

    return (
        <div className={FindUserStyles.findUserBlock}>
            <input onChange={inputOnChange} className={FindUserStyles.findUser} type="text" placeholder={props.placeholder}/>
        </div>
    );
}

FindUser.propTypes = {
    placeholder: PropTypes.string
};

FindUser.contextType = AppContext;

export default withContext(FindUser);




