import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

export default class Loader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true,
            displayTime: 3000
        }
    }

    componentWillMount() {
        setTimeout(
            this.setState({
                show: false
            })
            , 3000
        )
    }

    render() {
        return (
            <div>{this.state.show ?
                <div>
                    <Spinner type="grow" color="primary" />
                    <Spinner type="grow" color="success" />
                    <Spinner type="grow" color="danger" />
                    <Spinner type="grow" color="warning" />
                    <Spinner type="grow" color="info" />
                </div> : null}

            </div>
        );
    }
}