import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-slate-200">
                <div className="flex-1">
                    <Link to={'/'}>Quiz Square</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to={'/'}>Topics</Link></li>
                        <li> <Link to={'/statistics'}>Statistics</Link></li>
                        <li> <Link to={'/blog'}>Blog</Link></li>

                    </ul>
                </div>
            </div>




        </div>
    );
};

export default Header;