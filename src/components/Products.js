import React, { Component } from 'react'
import expand from './../Assets/svg/expand.svg';
import cart from './../Assets/svg/add_to_cart.svg';
import Fade from 'react-reveal/Reveal';
import Zoom from 'react-reveal/Zoom';
import Modal from 'react-modal';

const customStyles = {
    content : {
        left                  : '50%',
        top                   : '50%',
        right                 : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        bottom                : 'auto',
        borderRadius          : '50px'
    }
};

export class Products extends Component{

    constructor(props){
        super(props);
        this.state = {
            color: ['#45409C','#01AF67', '#FF6B01'],
            product: null
        }

    }
    openModal = (product) => {
        this.setState({
            product: product
        })
    }
    closeModal = () => {
        this.setState({
            product: null
        })
    }
    render(){
        return(
            <Fade bottom cascade >
                <div className='product-list'>
                    {this.props.products.map(product =>
                        <div  key={product.id} className="product">
                            <div className="product-header">
                                <div className="open"  onClick={()=>this.openModal(product)}>
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
                                <div className="product-image"  onClick={()=>this.openModal(product)}>
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
                    {this.state.product && (
                        <Modal
                            isOpen={true}
                            style={customStyles}
                            onRequestClose={this.closeModal}
                        >
                            <Fade cascade bottom>
                                <div onClick={this.closeModal}  className="product-modal">
                                    <div className="product-modal-title-description">
                                        <h3 className="product-modal-title">
                                            {this.state.product.title}
                                        </h3>
                                        <p className="product-modal-description" >
                                            Dolor aliqua pariatur excepteur ad consectetur anim esse nisi aute elit exercitation ullamco id labore. Elit ut proident aliqua aute labore et. Pariatur ipsum cillum do cillum velit cillum.
                                        </p>
                                    </div>
                                    <div className="product-modal-image">
                                        <div className="product-modal-circle">
                                            <img src={this.state.product.image} alt="product"/>

                                            <h2 className="product-modal-price">
                                                {this.state.product.price}
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="product-modal-add">
                                        <button className="product-modal-button" >
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </Fade>
                        </Modal>
                    )}
                </div>
            </Fade>
        )
    }
}