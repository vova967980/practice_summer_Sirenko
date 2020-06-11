import React, { Component }             from 'react';
import UserItemMoreStyles               from "./UserItemMoreStyles.module.sass"
import { mdiHumanFemale, mdiHumanMale } from '@mdi/js';
import Icon                             from "@mdi/react";
import moment                           from "moment";

class UserItemMore extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <>
                {
                    this.props.item && <div className={UserItemMoreStyles.UserItemMoreContainer}>
                        <div className={UserItemMoreStyles.rowBigFont}>
                            <span>{this.props.item.name.first}</span>
                            {
                                this.props.item.gender !== "male"
                                    ? <Icon path={mdiHumanFemale} size={2} color="#565656"/>
                                    : <Icon path={mdiHumanMale} size={2} color="#565656"/>
                            }
                        </div>
                        <div className={UserItemMoreStyles.flexRow}>
                            <div className={UserItemMoreStyles.column}>
                                <span><b>Username</b> {this.props.item.login.username}</span>
                                <span><b>Registered</b> {moment( this.props.item.registered.date ).format( "DD/MM/YYYY" )}</span>
                                <span><b>Email</b> {this.props.item.email}</span>
                            </div>
                            <div className={UserItemMoreStyles.column}>
                                <span><b>Address</b> {this.props.item.location.street.number + " " + this.props.item.location.street.name}</span>
                                <span><b>City</b> {this.props.item.location.city}</span>
                                <span><b>Zip Code</b> {this.props.item.location.postcode}</span>
                            </div>
                            <div className={UserItemMoreStyles.column}>
                                <span><b>Birthday</b> {moment(this.props.item.dob.date).format( "DD/MM/YYYY" )}</span>
                                <span><b>Phone</b> {this.props.item.phone}</span>
                                <span><b>Cell</b> {this.props.item.cell}</span>
                            </div>
                            <div className={UserItemMoreStyles.imageContainer}>
                                <img src={this.props.item.picture.large} alt="BIG_IMAGE"/>
                            </div>
                        </div>
                    </div>
                }
            </>
        );
    }
}

export default UserItemMore;