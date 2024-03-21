// import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, email, phone} = user ;
    return (<>
        <div className="p-10 border-2 border-yellow-400 space-y-5 rounded-xl">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p className="text-xl">Email:{email}</p>
            <p className="text-xl">Phone: {phone}</p>
            <div className='mt-5 '> 
            <Link className='text-xl p-3 bg-green-500 rounded-xl mr-5' to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}> <button className='text-xl p-3 px-5 bg-green-500 rounded-xl mr-5'>Id</button></Link>
            </div>
        </div>
        </>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
}

export default User;