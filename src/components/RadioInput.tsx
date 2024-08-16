import React from "react";

interface RadioInputProps {
    fieldLabel: string;
    fieldName: string;
    options: string[];
    selectedValue: string;
    onChange: (value: string) => void;
}

const RadioInput: React.FC<RadioInputProps> = ({ fieldLabel, fieldName, options, selectedValue, onChange }) => {
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
                        onChange={() => onChange(option)}
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
