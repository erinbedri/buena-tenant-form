import React from "react";

interface RadioInputProps {
    label: string;
    fieldName: string;
    options: string[];
    selectedValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

const RadioInput: React.FC<RadioInputProps> = ({ label: fieldLabel, fieldName, options, selectedValue, onChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-lg font-medium mb-2">{fieldLabel}</label>
            {options.map((option) => (
                <div key={option} className="mb-2">
                    <input
                        type="radio"
                        id={option}
                        name={fieldName}
                        value={option}
                        checked={selectedValue === option}
                        onChange={onChange}
                        className="mr-2"
                    />
                    <label htmlFor={option} className="text-gray-700">
                        {option}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default RadioInput;
