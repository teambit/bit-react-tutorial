import React, { Component } from 'react';

export default class TopBar extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <a href="/">
                    <h1>My Store</h1>
                </a>
                <a href="/" className="button fancy-button">
                    <i className="material-icons">shopping_cart</i>
                    Checkout
               </a>
            </div>
        );
    }
}