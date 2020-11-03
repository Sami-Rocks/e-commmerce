import React, { Component } from 'react'
import expand from './../Assets/svg/expand.svg';
import cart from './../Assets/svg/add_to_cart.svg';

export class Products extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            color: ['#45409C','#01AF67', '#FF6B01']
        }

    }
    render(){
        return(
            <div className='product-list'>
                {this.props.products.map(product =>
                    <div key={product.id} className="product">
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
                                <div className="rect" style={{background: this.state.color[Math.floor(Math.random() * this.state.color.length)]}} >
                                    <div className="circle"></div>
                                </div>
                            </div>
                            <div className="product-image">
                                <img src={product.image} alt='product' />
                            </div>
                        </div>
                        <div className="product-title">
                            <h4>{product.title}</h4>
                        </div>
                        <div className="product-price">
                            <p>{product.price}</p>
                        </div>
                    </div>

                )}

            

            </div>
        )
    }
}