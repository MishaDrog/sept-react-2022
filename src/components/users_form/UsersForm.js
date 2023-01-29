import React from 'react';
import { useForm } from "react-hook-form"

export const UsersForm = () => {
    const {register, handleSubmit, reset, formState:{ errors, isValid}} = useForm ({
        mode: 'all'
    })
    
    
    const submit = (data) => {
        console.log(data);
    }
    
    return (
        <div onSubmit={handleSubmit(submit)}>
            <input type="text"placeholder="username"{...register('username')}/>
            <button>Create new user</button>
        </div>
    );
};

