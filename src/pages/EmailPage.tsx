import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../components";

const EmailPage: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Submit");

        navigate("/phone");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <Button type="submit">Next</Button>
            </form>
        </div>
    );
};

export default EmailPage;
