import React, { Component } from 'react';
import Header from '../header/Header';
import Loader from '../loader/Loader';

import Uploadcard from '../uploader/UploadCard';
import CustomTabs from '../tabs/CustomTabs';
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
                 {/* <DemoTable /> */}
                <Uploadcard />
                <CustomTabs />
             </div>
        );
    }
}