import React, { useState, useEffect } from 'react'
import './userList.css'
import axios from 'axios';
import { User } from '../User/User'
const UserList = () => {
    const [listOfUser, setListOfUser] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                setListOfUser(res.data);
            })
    }
        , []);
    return (
        <div className="item">
            {listOfUser.map(user => <div className="user"><User user={user} /></div>)}
        </div>
    )
}

export default UserList