import React from 'react';
import { Link } from 'react-router-dom';
import css from './Cart.css'

const Cart = ({ friend }) => {
    const { id, name, username, email } = friend;
    return (
        <div className='cartId'>
            <h1>name : <Link to={`/${id}`}>{name}</Link> </h1>
            <h5>userName: {username}</h5>
            <p>{email}</p>
        </div>
    );
};

export default Cart;