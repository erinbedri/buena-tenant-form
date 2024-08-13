import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-transparent p-5">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <Link to="/" className="text-3xl font-semibold">
                    Buena
                </Link>
            </div>
        </header>
    );
};

export default Header;
