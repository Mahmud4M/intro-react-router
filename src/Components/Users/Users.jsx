// import React from 'react';

import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();

    return (
        <>
        <div className="text-center mb-12">
        <h1 className="mb-5 mt-5 text-5xl font-bold">Our Users: {users.length}</h1>
        </div>
        <div className="grid grid-cols-3 gap-5 text-center">
            {
                users.map((user, idx) => <User key={idx}
                user={user}
                ></User>)
            }
        </div>
        </>
    );
};

export default Users;