import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../components";

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col gap-10 items-center justify-center h-screen bg-gray-100 p-6">
            <h1 className="text-5xl font-extrabold">Welcome to Buena</h1>

            <div className="flex flex-col gap-3 text-lg text-center">
                <p>
                    We're excited to help you find your perfect apartment. Please follow the steps below to complete
                    your registration and start booking.
                </p>

                <p>
                    Our easy-to-use application form will guide you through the process of registering with Buena. Let's
                    get started!
                </p>
            </div>

            <Link to="/name" className="text-white">
                <Button>Get Started</Button>
            </Link>
        </div>
    );
};

export default HomePage;
