import React,  {Component} from 'react'

class Item extends Component{
    constructor(props){
        super(props);
        this.state={
            item:props.item,
            isCart:props.isCart
        }
    }

    add=()=>{
        this.props.addToCart(this.state.item)
    }

    remove=()=>{
        this.props.removeFromCart(this.state.item)
    }

    render(){
        console.log("rendering item");
        return(
            <React.Fragment>
                <a href={`/items/${this.state.item.id}`}><h1>{this.state.item.name}</h1></a>
                <p>Price: {this.state.item.price}</p>
                {
                    (this.state.isCart==true) ? 
                    (<p>Qty:{this.state.item.qty}</p>) :
                    ("")
                }
                {
                    (this.state.isCart==true) ? 
                    (<button onClick={this.remove}>Remove</button>) : 
                    (<button onClick={this.add}>Add To Cart</button>)
                }
                
            </React.Fragment>
        )
    }
}

export default Item;