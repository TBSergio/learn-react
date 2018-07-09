import {slide as Menu} from 'react-burger-menu';
import './slide-menu.css';
import React, { Component } from 'react';

class Smenu extends Component {
    showSettings (event) {
        event.preventDefault();
    }
    render() {
        return (
            <Menu>
                <a id ='tran-mon' className='menu-item' href="/TransactionMonitor">&#8596;Transactions</a>
                <a id ='stat' className='menu-item' href="/Statistics">Statistics</a>
                <a id ='about' className='menu-item' href="/About">About</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }
}

export default Smenu;