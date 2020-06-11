import React, { Component } from 'react';
import UserItemStyles       from './UserItemStyles.module.sass'
import { mdiPlusThick }     from '@mdi/js';
import Icon                 from '@mdi/react';
import classnames           from "classnames";


class UserItem extends Component {


    render() {
        return (
            <tr className={UserItemStyles.userItem}>
                <td className={UserItemStyles.tableElem}>
                    <div className={UserItemStyles.imageContainer}>
                        <img src="https://image.flaticon.com/icons/svg/21/21104.svg" alt="image"/>

                    </div>
                </td>
                <td className={UserItemStyles.tableElem}>
                    LastName
                </td>
                <td className={UserItemStyles.tableElem}>
                    FirstName
                </td>
                <td className={UserItemStyles.tableElem}>
                    UserNickName
                </td>
                <td className={UserItemStyles.tableElem}>
                    Phone Number
                </td>
                <td className={UserItemStyles.tableElem}>
                    Location
                </td>
                <td className={classnames( UserItemStyles.tableElem, UserItemStyles.flexEnd )}>
                    <Icon path={mdiPlusThick} size="45" color="#565656"/>
                </td>

            </tr>
        );
    }
}

export default UserItem;