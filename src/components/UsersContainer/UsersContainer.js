import React, { Component } from "react";
import UsersContainerStyles from './UsersContainerStyles.module.sass'
import UserItem             from "../UserItem/UserItem";

class UsersContainer extends Component {

    render() {
        return (
            <table className={UsersContainerStyles.usersContainer}>
                <thead>
                <tr>
                    <th className={UsersContainerStyles.tableHeader}></th>
                    <th className={UsersContainerStyles.tableHeader}>Last</th>
                    <th className={UsersContainerStyles.tableHeader}>First</th>
                    <th className={UsersContainerStyles.tableHeader}>Username</th>
                    <th className={UsersContainerStyles.tableHeader}>Phone</th>
                    <th className={UsersContainerStyles.tableHeader}>Location</th>
                    <th className={UsersContainerStyles.tableHeader}></th>
                </tr>
                </thead>
                <tbody>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                </tbody>
            </table>
        );
    }
}

export default UsersContainer;