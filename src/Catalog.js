import React,  {PureComponent} from 'react'
import Item from './Item';

class Catalog extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            items:props.items
        }
    }

    addToCart=(item)=>{
        console.log(JSON.stringify(item))
        this.props.addToCart(item);
    }

    // shouldComponentUpdate(newProps, newState){
    //     if(newState.items.length==this.state.items.length){
    //         return false;
    //     }
    //     return true;
    // }

    render(){
        console.log("rendering catalog");
        return(
            <React.Fragment>
                <h1>Catalog</h1>
                {
                    this.state.items.map((item)=>{
                        return <Item key={item.id} item={item} addToCart={this.addToCart} isCart={false}/>
                    })
                }
            </React.Fragment>
        )
    }
}

export default Catalog;