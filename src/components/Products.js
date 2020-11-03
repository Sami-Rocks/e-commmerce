import React, { Component } from 'react'
import expand from './../Assets/svg/expand.svg';
import cart from './../Assets/svg/add_to_cart.svg';

export class Products extends Component{
    render(){
        return(
            <div className="product">
                <div className="product-header">
                    <div className="open">
                        <img src={expand} alt='expand'/>
                    </div>
                    <div className="add-to-cart">
                        <img src={cart}  alt='cart' />
                    </div>
                </div>
                <div className="product-image-background">
                    <div className="product-background">
                        <div className="rect" style={{background: '#45409C'}} >
                            <div className="circle"></div>
                        </div>
                    </div>
                    <div className="product-image">
                        <img src="https://www.pngarts.com/files/2/Shoes-Transparent-Background-PNG.png" alt='product' />
                    </div>
                </div>
                <div className="product-title">
                    <h4>Title Title</h4>
                </div>
                <div className="product-price">
                    <p>$20.00</p>
                </div>
            </div>
        )
    }
}