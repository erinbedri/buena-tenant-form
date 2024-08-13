import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../components";

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold mb-6">Welcome to Buena</h1>

            <p className="text-lg mb-6 text-gray-700">
                Please complete the following steps to register and start booking apartments.
            </p>

            <Link to="/name" className="text-white">
                <Button>Get Started</Button>
            </Link>
        </div>
    );
};

export default HomePage;
