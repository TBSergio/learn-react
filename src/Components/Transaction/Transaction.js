import React, { Component } from 'react';
import './Transaction.css';
import Collapsible from 'react-collapsible';
var Transaction = require('../../MockData/Transaction1.json');

class Tran extends Component {

    expendHandler = () => {
        console.log('Clicked Transaction');
    };
    createEvents = (Trans) =>{
        let events = [];
        for (let i = 0;i<Trans.Events.length;i++){
        events.push(<p>EventID: {Trans.Events[i].EventID} | ParentID:{Trans.Events[i].ParentID} | Description: {Trans.Events[i].Description}</p>);
        }
        return events;
    }
    createSubServices = (Trans) => {
        let subservices = [];
        for(let i = 0;i<Trans.SubServices.length;i++){
            let trg = "Transaction: " +Trans.SubServices[i].TranID+" | Provider: "+Trans.SubServices[i].Provider+" | Consumer: "+Trans.SubServices[i].Consumer+" | DateTime:"+Trans.SubServices[i].DateTime;
            subservices.push(this.createTransaction(Trans.SubServices[i]));
        }
        return subservices;
    }
    createTransaction = (Trans) => {
        var trg = "Transaction: "+Trans.TranID+" | Provider: "+Trans.Provider+" | Consumer: "+Trans.Consumer+" | DateTime: "+Trans.DateTime;
        return (
            <Collapsible trigger={trg}>
                {this.createEvents(Trans)}
                {this.createSubServices(Trans)}
            </Collapsible>
        );
    }
    
    render() {
        return this.createTransaction(this.props.tra);
    }
}

export default Tran;