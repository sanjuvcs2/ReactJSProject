// eslint-disable-next-line
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Layout.css';

class Layout extends Component {
    static defaultProps = {
    };

    static propTypes = {
    };

    constructor() {
        super();
        this.state = {
            isShowMenu: false
        };
    }

    logout = () => {
        window.location.href = '/';
    }

    render() {
        const { isShowMenu } = this.state;
        return (
            <main id="layout">
                <div className="top fixed-top">
                    <button type="button" className="btn btn-link text-right logout" onClick={this.logout}>Logout</button>
                </div>
                <div className="container">
                    <div className="row col-lg-12">
                        <div className="pull-left">
                            <a href="#" className="poc">POC</a>
                        </div>
                        <div className="pull-right">
                            <div id="phone">T: <strong>0123456789</strong><br />
                                <span>Hours: Mon-Fri 9am-5pm</span></div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-head">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="/home" title="Home" className="firstitem">Home</a></li>
                                <li className="active"><a href="/choose" title="Why choose us?">Why choose us?</a></li>
                                <li><a href="/about" title="About us">About us</a></li>
                                <li><a href="/cart" title="Cart">Cart</a></li>
                                <li><a href="/contact" title="Contact us">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </main>
        );
    }
}

export default Layout;

