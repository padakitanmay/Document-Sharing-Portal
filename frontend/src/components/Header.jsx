import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className='bg-gray-800 text-white py-2'>
            <div className='container mx-auto flex justify-between items-center'>
                <h1 className='text-lg font-bold'>
                    <Link to='/'>
                        Logo
                    </Link>
                </h1>
                <nav>
                    <ul className='flex space-x-2'>
                        <li>
                            <Link to='/login'>
                                <button className='bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded'>
                                    Login
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/signup'>
                                <button className='bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded'>
                                    Signup
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
