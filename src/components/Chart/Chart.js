import React, { Component } from 'react';
import PropTypes            from "prop-types";

import Chart from "chart.js";

class ChartGender extends Component {
    constructor( props ) {
        super( props );
    }

    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext( "2d" );
        let counter = 0;
        for ( let elem of this.props.values ) {
            counter += elem;
        }
        const koef = 100 / counter;

        for ( let i = 0; i < this.props.values.length; i++ ) {
            this.props.values[i] = this.props.values[i] * koef.toFixed( 2 );

        }

        new Chart( myChartRef, {
            type: this.props.type,
            data: {
                labels: [...this.props.labels],
                datasets: [
                    {
                        label: this.props.label,
                        data: [...this.props.values],
                        backgroundColor: ["#2ab2e8", "#323e42"],
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: this.props.label,
                    fontSize: 20
                },
                legend: {
                    display: true,
                    position: 'right'
                },
            }
        } );
    }

    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

ChartGender.propTypes = {
    type: PropTypes.string,
    values: PropTypes.array,
    labels: PropTypes.array,
    label: PropTypes.string,
};

export default ChartGender