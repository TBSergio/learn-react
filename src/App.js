import React, { Component } from 'react';
import './App.css';
import Smenu from './Components/Slide-Menu/slide-menu.js';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';
import Tran from './Components/Transaction/Transaction.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
          columnDefs: [
              {headerName: "Make", field: "make", rowGroupIndex: 0 },
              {headerName: "Price", field: "price"}
          ],
          autoGroupColumnDef: {
              headerName: "Model", 
              field: "model", 
              cellRenderer:'agGroupCellRenderer',
              cellRendererParams: {
                  checkbox: true
              }
          }
      ,
        rowData: [
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Toyota", model: "Corola", price: 15000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxter", price: 72000}
        ]
    }
  }

  onButtonClick = e => {
    const selectedNodes = this.gridApi.getSelectedNodes()  
    const selectedData = selectedNodes.map( node => node.data )
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ')
    alert(`Selected nodes: ${selectedDataStringPresentation}`) 
  }
  
  render() {
    return (
      <div>
        <Smenu />
        {/* <div
          className="ag-theme-balham"
          style={{
            height: '500px',
            width: '600px'
          }}
        >
          <button onClick={this.onButtonClick}>Get selected rows</button>
          <AgGridReact
            columnDefs={this.state.columnDefs}
            groupSelectsChildren={true}
            autoGroupColumnDef={this.state.autoGroupColumnDef}
            rowData={this.state.rowData}
            enableSorting={true}
            enableFilter={true}
            rowsSelection="multiple"
            onGridReady={ params => this.gridApi = params.api }
            >
          </AgGridReact>
        </div> */}
        <Tran />
        <Tran />
      </div>
    );
  }
}

export default App;
