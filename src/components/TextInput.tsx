import React from "react";

interface TextInputProps {
    label: string;
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ label, id, value, onChange, required = false }) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-lg font-medium mb-2">
                {label}
            </label>
            <input
                type="text"
                id={id}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
        </div>
    );
};

export default TextInput;
