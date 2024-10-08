import React from "react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
    className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ className = "" }) => {
    const navigate = useNavigate();

    return (
        <button
            type="button"
            onClick={() => navigate(-1)}
            className={`p-3 bg-gray-300 hover:bg-gray-400 transition duration-300 ease-in-out text-gray-800 rounded-full shadow-md ${className}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </button>
    );
};

export default BackButton;
