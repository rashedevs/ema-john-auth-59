import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { handleRemoveProduct, product } = props
    const { name, img, price, shipping, quantity } = product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='item-details-container'>
                <div className="item-detail">
                    <p className="product-name" title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
                    <p><span className='product-price'>Price: ${price}</span></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="item-delete">
                    <button className='delete-button' onClick={() => handleRemoveProduct(product)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;