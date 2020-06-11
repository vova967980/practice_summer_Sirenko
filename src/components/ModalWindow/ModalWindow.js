import React, { Component } from 'react';
import ModalWindowStyles    from './ModalWindow.module.sass'
import { mdiCloseThick }    from '@mdi/js';
import Icon                 from "@mdi/react";

class ModalWindow extends Component {
    constructor( props ) {
        super( props );

    }


    render() {
        return (
            <>
                <div className={ModalWindowStyles.background} onClick={this.props.closeHandler}>
                </div>
                <div className={ModalWindowStyles.windowContainer}>
                    <div className={ModalWindowStyles.modalWindowContainer}>
                        <Icon onClick={this.props.closeHandler} className={ModalWindowStyles.closeIcon}
                              path={mdiCloseThick} size={1.2} color="gray"/>
                        {
                            this.props.children
                        }
                    </div>
                </div>
            </>
        );
    }
}


export default ModalWindow;