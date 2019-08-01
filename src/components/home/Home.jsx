import React, { Component } from 'react';
import Header from '../header/Header';
import Loader from '../loader/Loader';
import ResultTable from '../tables/ResultTable'
import DemoTable from '../tables/DemoTable';
export default class Home extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
             <div>
                 <Header />
                 <Loader />
                 {/* <ResultTable /> */}
                 <DemoTable />
             </div>
        );
    }
}