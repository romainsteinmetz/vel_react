import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cart.css';
import Item from '../Item/Item.js';

class Cart extends Component {
    componentDidMount = () => {
        console.log('cart didMount');
        console.log(this.props.prod);
    };

    componentWillReceiveProps = (nextProps) => {
        console.log('cart willReceiveProps');
        console.log(nextProps.prod);
        console.log(this.props.prod);
    }

    shouldComponentUpdate (nextProps) {
        console.log('cart shouldComponentUpdate');
        console.log(nextProps.prod);
        return true;
    }

    render() {
        const { prod, items } = this.props;

        var itemRows = [];
        items.forEach((item, key) => {
            itemRows.push(<Item item={item} itemKey={key} key={key} />);
        });

        return (
            <div className="Cart">
                <span className="Title">Panier</span>
                {itemRows}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        prod: state.prod,
        items: state.items
    }
}

export default connect(mapStateToProps)(Cart)
