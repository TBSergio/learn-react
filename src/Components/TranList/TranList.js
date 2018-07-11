import React, { Component } from 'react';
import Tran from '../Transaction/Transaction.js';
var TranLs = require('../../MockData/TranList.json');

class TranList extends Component {
    state={
        Tran:[false,false,false]
    }


    showFullTran = (i,d) => {
        let Tran = this.state.Tran;
        Tran[i] = true;
        this.setState(
            {
                Tran
            }
        )
    }

    renderList = () =>{
        let TranL = [];
        for(let i = 0;i<TranLs.length;i++){
        let choice = <div key={i}>{(!this.state.Tran[i]) ? <div className="TranElem" onClick={this.showFullTran.bind(this,i)}>This is a regular Div, Press To LazyLoad Transaction.</div> : <Tran tra={i}/>}</div>;
            TranL.push(choice); 
        }
        return TranL;
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

export default TranList;