import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/products">Product</Link>
        </div>
    );
}

export default Header;
