import React, { Component } from 'react';
import Tran from '../Transaction/Transaction.js';
var TranL = require('../../MockData/TranList.json');


class TranList extends Component {
    state={
        TranElem1:false,
        TranElem2:false,
        data:{}
    }


    showFullTran = (i,d) => {
        let ele = "Tran"+i
        this.setState(
            {
                [ele]:{
                    isTran:true,
                    data: [d]
                }
            }
        )
    }

    render() {
        return (
            <div>
                {(!this.state.Tran1) ? <div className="TranElem" onClick={this.showFullTran.bind(this,1)}>This is a regular Div, Press To LazyLoad Transaction.</div> : <Tran tra={require('../../MockData/Transaction1.json')}/>}
                {(!this.state.Tran2) ? <div className="TranElem" onClick={this.showFullTran.bind(this,2)}>This is a regular Div, Press To LazyLoad Transaction.</div> : <Tran tra={require('../../MockData/Transaction2.json')}/>}
            </div>
        );
    }
}

export default TranList;