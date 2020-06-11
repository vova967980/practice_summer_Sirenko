import React               from 'react';
import mainContainerStyles from './MainContainer.module.sass'
import UsersContainer      from "./../UsersContainer/UsersContainer";
import FindUser            from "../FindUser/FindUser";
import Chart               from "../Chart/Chart";
import Button              from "../Button/Button";
import { Component }       from 'react';
import ModalWindow         from "../ModalWindow/ModalWindow";
import withContext         from "../HoCs/withContext";
import AppContext          from "../../store";

class MainContainer extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            modalWindowIsOpen: false
        }
    }

    buttonChartsHandler = () => {
        this.setState( {
                           modalWindowIsOpen: !this.state.modalWindowIsOpen
                       } );
    };

    render() {
        return (
            <div className={mainContainerStyles.mainBlock}>
                <div className={mainContainerStyles.subBlock}>
                    <Button name="Look Charts" handler={this.buttonChartsHandler}/>
                    <FindUser placeholder="First name"/>
                    <UsersContainer/>
                    {
                        this.state.modalWindowIsOpen && <ModalWindow closeHandler={this.buttonChartsHandler}
                            children={<Chart type="pie" label="Gender Users" labels={["Male","Female"]}
                                             values={[this.props.maleCount, this.props.femaleCount]}/>}/>
                    }
                </div>
            </div>
        );
    }
}

MainContainer.context = AppContext;

export default withContext( MainContainer );

