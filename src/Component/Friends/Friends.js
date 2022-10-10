import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';

const Friends = () => {
    const friends = useLoaderData()
    // console.log(friends)
    return (
        <div>
            {
                friends.map(friend => <Cart key={friend.id} friend={friend}></Cart>)
            }
        </div>
    );
};

export default Friends;