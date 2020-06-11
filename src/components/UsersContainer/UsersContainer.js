import React, { Component } from "react";
import UsersContainerStyles from './UsersContainerStyles.module.sass'
import UserItem             from "../UserItem/UserItem";
import UserItemMore         from "../UserItemMore/UserItemMore";

class UsersContainer extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            whichIsOpened: "name",
            items: []
        };
    }

    componentDidMount() {
        for ( let i = 0; i < 10; i++ ) {

            fetch( "https://randomuser.me/api/" )
                .then( res => res.json() )
                .then(
                    ( result ) => {
                        this.setState( {
                                           items: [...this.state.items, result.results[0]]
                                       } );
                        console.log( this.state.items );
                    } )
        }
    }

    render() {
        const changeState = ( e ) => {
            if(this.state.whichIsOpened === e.target.id){
                this.setState({
                                  whichIsOpened: ""
                              });
            }else{
                this.setState({
                                  whichIsOpened: e.target.id
                              });
            }
        };
        let listItems = this.state.items.map((item)=>
           this.state.whichIsOpened === item.id.value
               ? (<><UserItem changeState={changeState} opened="true" item={item}/>
                   <UserItemMore/>
               </>)
               : <><UserItem changeState={changeState} item={item}/></>
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

export default UsersContainer;