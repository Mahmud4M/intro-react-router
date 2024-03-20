// import React from 'react';
import PropTypes from 'prop-types';

const User = ({user}) => {
    const {name, email, phone} = user ;
    return (<>
        <div className="p-10 border-2 border-yellow-400 space-y-5 rounded-xl">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p className="text-xl">{email}</p>
            <p className="text-xl">{phone}</p>
            <p></p>
        </div>
        </>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
}

export default User;