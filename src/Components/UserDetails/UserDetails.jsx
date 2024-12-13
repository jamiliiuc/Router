import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    return (
        <div>
            {user.name}
        </div>
    );
};

export default UserDetails;