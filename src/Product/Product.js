import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProd } from '../Store/Actions';
import './Product.css';

class Product extends Component {

    constructor(props) {
        super(props);
        this.getPrice = this.getPrice.bind(this);
    }

    getPrice(price) {
        let formatedPrice = parseFloat(price/100).toFixed(2);
        return formatedPrice + ' €';
    }

    render() {
        const { product, addProd } = this.props;
        return (
            <div className="Product" key={product.get('id')}>
                <div className="name">{product.get('name')}</div>
                <div className="price">{this.getPrice(product.get('price'))}</div>
                <button onClick={() => addProd(product)}>Choisir</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        prod: state.prod
    }
}

const mapActionsToProps = {
    addProd
}

export default connect(mapStateToProps, mapActionsToProps)(Product)
