import React, { Component } from 'react';
import { products } from './products';
import './product-list.css';

export default class ProductList extends Component {
    share() {
        window.alert('The product has been shared!');
    }

    getProduct(product, index) {
        return (
            <div key={index}>
                <h3>
                    <a title={product.name + ' details'} href="/">{product.name}</a>
                </h3>
                <p>Description: {product.description} </p>
                <button className="btn" onClick={this.share}>Share</button>
            </div>
        )
    }

    render() {
        return (
            <>
                <h2>Products</h2>
                <br/>
                <div>
                    {
                        products.map((product, index) => {
                            return this.getProduct(product, index);
                        })
                    }
                </div>
            </>
        );
    }
}