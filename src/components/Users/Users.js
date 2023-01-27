import {User} from "../User/User";
import {useEffect, useState} from "react";
import axios from "axios";
import {axiosService} from "../services/axiosService";
import {userService} from "../services/userService";

const Users = () => {
    const [users, setUsers] = useState([]);

    const [count, setCount] = useState(0);

    useEffect(()=>{

        userService.getAll()
            .then(value => value.data)
            .then(value => setUsers([...value]))

    },[count])



    return (

        <div>
            <button onClick={()=>setCount(prevState => prevState+1)}>Click </button>
            {users.map(user=> <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};