import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useUserInfoContext } from "../contexts/UserInfoContext";

const Header: React.FC = () => {
    const navigate = useNavigate();
    const { reset } = useUserInfoContext();

    return (
        <header className="fixed top-0 left-0 w-full bg-transparent p-5">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <Link to="/" className="text-3xl font-semibold" onClick={() => reset(navigate)}>
                    Buena
                </Link>
            </div>
        </header>
    );
};

export default Header;
