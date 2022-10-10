import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Dynamin = () => {
    const link = useLoaderData();

    const { id, name, username, email } = link;
    return (
        <div>
            <h1>my dynamic user information</h1>
            <h1>name : {name}</h1>

        </div>
    );
};

export default Dynamin;