import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import './User.css'
const Users = () => {
    // useState
    // spinner state
    // useEffect
    const users = useLoaderData();
    const navigate = useNavigate();

    function handleShowDetails(userId) {
        navigate("/users/" + userId)
    }
    
    return (
        <div>
            <h1>This is the Users page</h1>
            <div className='user-container'>
                {
                    users.map((user) => {
                        return (
                            <div className="user" key={user.id}>
                                <h2>{user.name}</h2>
                                <p>{user.email}</p>
                                <button onClick={() => handleShowDetails(user.id)}>User Details</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Users;