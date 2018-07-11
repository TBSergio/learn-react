import React, { Component } from 'react';
import './Transaction.css';
import Collapsible from 'react-collapsible';

class Tran extends Component {

    expendHandler = () => {
        console.log('Clicked Transaction');
    };
    createEvents = (Trans) =>{
        let events = [];
        for (let i = 0;i<Trans.Events.length;i++){
        events.push(<p key={i}>EventID: {Trans.Events[i].EventID} | ParentID:{Trans.Events[i].ParentID} | Description: {Trans.Events[i].Description}</p>);
        }
        return events;
    }
    createSubServices = (Trans) => {
        let subservices = [];
        for(let i = 0;i<Trans.SubServices.length;i++){
            subservices.push(this.createTransaction(Trans.SubServices[i]));
        }
        return subservices;
    }
    createTransaction = (Trans) => {
        var trg = "Transaction: "+Trans.TranID+" | Provider: "+Trans.Provider+" | Consumer: "+Trans.Consumer+" | DateTime: "+Trans.DateTime;
        return (
            <Collapsible trigger={trg} key={Trans.TranID}>
                {this.createEvents(Trans)}
                {this.createSubServices(Trans)}
            </Collapsible>
        );
    }
    
    render() {
        let chosenTran = {};
        switch(this.props.tra){
            case 1:
                chosenTran=require('../../MockData/Transaction1.json');
                break;
            case 2:
                chosenTran=require('../../MockData/Transaction2.json');
                break;
            default:
                chosenTran={TranID: 'Default',Provider:'Default',Consumer:'Default',DateTime:'Default',Events:[],SubServices:[]};
                break;
        }
        return this.createTransaction(chosenTran);
    }
}

export default Tran;