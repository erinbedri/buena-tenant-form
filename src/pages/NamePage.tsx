import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BackButton, Button } from "../components";
import { PATHS } from "../utils/urls";

const NamePage: React.FC = () => {
    const [fullName, setFullName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // continue with logic here
        console.log({ fullName });

        navigate(PATHS.EMAIL);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
            <h2 className="text-3xl font-semibold mb-6">Enter Your Full Name</h2>

            <form onSubmit={handleSubmit} className="w-full max-w-xl">
                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-lg font-medium mb-2">
                        Full Name
                    </label>

                    <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                </div>

                <div className="flex gap-5">
                    <BackButton />
                    <Button type="submit">Next</Button>
                </div>
            </form>
        </div>
    );
};

export default NamePage;
