// import React from 'react';

import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user = useLoaderData();
    const {id, name} = user;


    return (
        <div className="p-5 border-2 border-red-700 w-[500PX] mx-auto rounded-xl mt-5">
            <h1 className="text-3xl text-center mb-12 mt-12 font-semibold">Users: {id}</h1>
            <h1 className="text-3xl text-center mb-12 mt-12">Name of users: {name}</h1>
        </div>
    );
};

export default UserDetails;