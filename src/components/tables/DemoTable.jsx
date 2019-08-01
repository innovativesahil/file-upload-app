import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import * as mock from './mockTableData';

export default class DemoTable extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        const { products, columns } = mock
        return (
            <div>
                <BootstrapTable
                    keyField='id'
                    bootstrap4
                    data={products}
                    columns={columns} />
            </div>
        );
    }
}