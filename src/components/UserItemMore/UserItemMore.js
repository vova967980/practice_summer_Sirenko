import React, { Component }             from 'react';
import UserItemMoreStyles               from "./UserItemMoreStyles.module.sass"
import { mdiHumanFemale, mdiHumanMale } from '@mdi/js';
import Icon                             from "@mdi/react";

class UserItemMore extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div className={UserItemMoreStyles.UserItemMoreContainer}>
                <div className={UserItemMoreStyles.rowBigFont}>
                    <span>Name</span>
                    {
                        "male" === "male"
                            ? <Icon path={mdiHumanMale} size={2} color="#565656"/>
                            : <Icon path={mdiHumanFemale} size={2} color="#565656"/>
                    }
                </div>
                <div className={UserItemMoreStyles.flexRow}>
                    <div className={UserItemMoreStyles.column}>
                        <span><b>Username</b> {"none"}</span>
                        <span><b>Registered</b> {"none"}</span>
                        <span><b>Emai</b>l {"none"}</span>
                    </div>
                    <div className={UserItemMoreStyles.column}>
                        <span><b>Address</b> {"none"}</span>
                        <span><b>City</b> {"none"}</span>
                        <span><b>Zip Code</b> {"none"}</span>
                    </div>
                    <div className={UserItemMoreStyles.column}>
                        <span><b>Birthday</b> {"none"}</span>
                        <span><b>Phone</b> {"none"}</span>
                        <span><b>Cell</b> {"none"}</span>
                    </div>
                    <div className={UserItemMoreStyles.imageContainer}>
                        <img src="https://image.flaticon.com/icons/svg/21/21104.svg" alt="BIG_IMAGE"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserItemMore;