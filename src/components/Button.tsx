import React from "react";

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ type = "button", onClick, className = "", children, disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`py-2 px-6 rounded-3xl font-semibold transition duration-300 ease-in-out ${
                disabled ? "bg-gray-400 text-gray-600 cursor-not-allowed" : "bg-gray-900 text-white hover:bg-gray-700"
            } ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
