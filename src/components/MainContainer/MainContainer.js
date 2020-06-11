import React               from 'react';
import mainContainerStyles from './MainContainer.module.sass'
import UsersContainer      from "./../UsersContainer/UsersContainer";
import FindUser            from "../FindUser/FindUser";

function MainContainer() {
    return (
        <div className={mainContainerStyles.mainBlock}>
            <div className={mainContainerStyles.subBlock}>
                <FindUser placeholder="Username"/>
                <UsersContainer/>

            </div>
        </div>
    );
}

export default MainContainer;