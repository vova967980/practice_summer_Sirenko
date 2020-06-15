import React, { Component } from "react";
import UsersContainerStyles from './UsersContainerStyles.module.sass'
import UserItem             from "../UserItem/UserItem";
import UserItemMore         from "../UserItemMore/UserItemMore";
import AppContext           from "../../store";
import withContext          from "../HoCs/withContext";

class UsersContainer extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            whichIsOpened: "name",
            items: []
        };
    }

    componentDidMount() {
        for ( let i = 0; i < 15; i++ ) {

            fetch( "https://randomuser.me/api/" )
                .then( res => res.json() )
                .then(
                    ( result ) => {
                        this.setState( {
                                           items: [...this.state.items, result.results[0]]
                                       } );

                    } );

        }
    }

    render() {
        const {usernameValue} = this.props;
        if(usernameValue){
            this.state.whichIsOpened = "";
        }

        const changeState = ( e ) => {
            if ( this.state.whichIsOpened === e.target.id ) {
                this.setState( {
                                   whichIsOpened: ""
                               } );
            } else {
                this.setState( {
                                   whichIsOpened: e.target.id
                               } );
            }
        };
        let listItems = this.state.items.map( ( item ) =>  this.state.whichIsOpened === item.id.value
                                                      ? (<><UserItem changeState={changeState} opened="true"
                                                                     item={item}/>
                                                          <UserItemMore item={item}/>
                                                      </>)
                                                      : item.name.first.match( usernameValue ) && usernameValue !== null
                                                          ? <><UserItem changeState={changeState} item={item}/></>
                                                          : usernameValue === null && <><UserItem changeState={changeState} item={item}/></>
        );


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
                {listItems}
                </tbody>
            </table>
        );
    }
}

UsersContainer.contextType = AppContext;

export default withContext( UsersContainer );
