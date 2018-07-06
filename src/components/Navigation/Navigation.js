import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {

    return (
        <div>
            <Link to = '/cart'>
                <button>Cart</button>
            </Link>

            <Link to = '/'>
                <button>Home</button>
            </Link>
        </div>
    )
};

export default Navigation;