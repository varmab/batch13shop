import React,  {Component} from 'react'
import './Shop.css'
import Catalog from './Catalog';
import Cart from './Cart';
import Checkout from './Checkout';

class Shop extends Component{
    constructor(){
        super();

        var items=[
            {
                id:1,
                name:"Shirt",
                price:100
            },
            {
                id:2,
                name:"Short",
                price:100
            },
            {
                id:3,
                name:"Pant",
                price:100
            }
        ]

        this.state={
            items:items,
            cartItems:[]
        }
    }

    addToCart=(item)=>{
        console.log(JSON.stringify(item))
        this.setState({
            cartItems:[
                ...this.state.cartItems,
                item
            ]
        })
    }

    render(){
        return(
            <div className="row">
                <h1>Shop</h1>
                <div className="column">
                    <Catalog items={this.state.items} addToCart={this.addToCart}/>
                </div>
                <div className="column">
                    <Cart items={this.state.cartItems}/>
                    <Checkout/>
                </div>
            </div>
        )
    }
}

export default Shop;