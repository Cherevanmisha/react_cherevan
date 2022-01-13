import React, {useEffect, useState} from 'react';
import User from "./User";
import {userService} from "../services/services";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, [])

    const getUserId = (id) => {
        userService.getById(id)
            .then(value => setUser(value))
    }

    return (
        <div className='flex'>

            <div>{users.map(value => <User key={value.id} user={value}
                                           getUserId={getUserId}/>)}</div>

            <div className='details'>
                {user && <div>{user.id} -- {user.username} -- {user.email}--
                    {user.phone}--{user.website} </div>}

            </div>


        </div>
    );
};

export default Users;