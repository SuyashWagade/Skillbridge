import React from 'react';

const Card = ({ children, className = '', ...props }) => {
    return (
        <div
            className={`bg-white rounded-2xl p-6 card-shadow ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
