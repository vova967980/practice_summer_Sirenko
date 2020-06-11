import React, { Component }       from 'react';
import UserItemStyles             from './UserItemStyles.module.sass'
import { mdiPlusThick, mdiMinus } from '@mdi/js';
import Icon                       from '@mdi/react';
import classnames                 from "classnames";


class UserItem extends Component {
    constructor( props ) {
        super( props );

    }

    render() {

        return (
            <>
                {
                    this.props.item && <div className={UserItemStyles.userItem} onClick={this.props.changeState} id={this.props.item.id.value} >
                        <tr >
                            <td className={UserItemStyles.tableElem}>
                                <div className={UserItemStyles.imageContainer}>
                                    <img src={this.props.item.picture.large} alt="image"/>
                                </div>
                            </td>
                            <td className={UserItemStyles.tableElem}>
                                {this.props.item.name.last}
                            </td>
                            <td className={UserItemStyles.tableElem}>
                                {this.props.item.name.first}
                            </td>
                            <td className={UserItemStyles.tableElem}>
                                {this.props.item.login.username}
                            </td>
                            <td className={UserItemStyles.tableElem}>
                                {this.props.item.phone}
                            </td>
                            <td className={UserItemStyles.tableElem}>
                                {this.props.item.location.city}
                            </td>
                            <td className={classnames( UserItemStyles.tableElem, UserItemStyles.flexEnd )}>
                                {
                                    this.props.opened === "true"
                                        ? <Icon path={mdiMinus} size="45" color="#565656"/>
                                        : <Icon path={mdiPlusThick} size="45" color="#565656"/>
                                }
                            </td>
                        </tr>
                    </div>
                }
            </>
        );
    }
}

export default UserItem;