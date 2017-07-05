import React, { Component } from 'react';
import { toJS } from 'immutable';

class Item extends Component {

    constructor(props) {
        super(props);
        this.getPrice = this.getPrice.bind(this);
    }

    getPrice(price) {
        let formatedPrice = parseFloat(price/100).toFixed(2);
        return formatedPrice + ' €';
    }

    render() {
        const { itemKey, item } = this.props;
        return (
            <div className="Item" key={itemKey}>
                <div className="ItemName">{item.product.get('name')}</div>
                <div className="ItemPrice">{this.getPrice(item.product.get('price'))}</div>
            </div>
        );
    }
}

export default Item
