import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, {  Search} from 'react-bootstrap-table2-toolkit';
// import cellEditFactory from 'react-bootstrap-table2-editor';

import * as mock from './mockTableData'
const { SearchBar } = Search;
const productsGenerator =(a) =>{
  mock.arr.map((product, index) => {
      return {
          id : product,
          name : "Product" + product,
          price : "$100" + product
      }
  });
}
const columns = mock.columns;
export default class ResultTable extends React.Component {
  constructor(){
      super();
      this.state = {
          products : []
      }
  }
  componentWillMount() {
    this.loadData();
  }
  loadData = () => {
    this.setState({ products: productsGenerator(17) });
  }


  render() {
    const options = {
      custom: true,
      paginationSize: 4,
      pageStartIndex: 1,
      firstPageText: 'First',
      prePageText: 'Back',
      nextPageText: 'Next',
      lastPageText: 'Last',
      nextPageTitle: 'First page',
      prePageTitle: 'Pre page',
      firstPageTitle: 'Next page',
      lastPageTitle: 'Last page',
      showTotal: true,
      totalSize: 50
    };
    const contentTable = ({ paginationProps, paginationTableProps }) => (
      <div>
        <button className="btn btn-default" onClick={ this.loadData }>Load Another Data</button>
        <PaginationListStandalone { ...paginationProps } />
        <ToolkitProvider
          keyField="id"
          columns={ columns }
          data={ this.state.products }
          search
        >
          {
            toolkitprops => (
              <div>
                <SearchBar { ...toolkitprops.searchProps } />
                <BootstrapTable
                  striped
                  hover
                //   filter={ filterFactory() }
                  defaultSortDirection="asc"
                //   cellEdit={ cellEditFactory({ mode: 'dbclick',blurToSave: true }) }
                  { ...toolkitprops.baseProps }
                  { ...paginationTableProps }
                />
              </div>
            )
          }
        </ToolkitProvider>
        <PaginationListStandalone { ...paginationProps } />
      </div>
    );

    return (
      <div>
        <h2>PaginationProvider will care the data size change. You dont do anything</h2>
        <PaginationProvider
          pagination={
            paginationFactory(options)
          }
        >
          { contentTable }
        </PaginationProvider>
        {/* <Code>{ sourceCode }</Code> */}
      </div >
    );
  }
}