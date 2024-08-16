import React from "react";

interface RadioInputProps {
    label: string;
    fieldName: string;
    options: string[];
    selectedValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

const RadioInput: React.FC<RadioInputProps> = ({
    label: fieldLabel,
    fieldName,
    options,
    selectedValue,
    onChange,
    required = false,
}) => {
    return (
        <div className="mb-6">
            <label className="block text-lg font-medium mb-4">{fieldLabel}</label>
            <div className="flex flex-col gap-3">
                {options.map((option) => (
                    <div key={option} className="flex items-center">
                        <input
                            type="radio"
                            id={option}
                            name={fieldName}
                            value={option}
                            checked={selectedValue === option}
                            onChange={onChange}
                            className="form-radio text-gray-700 focus:ring-gray-500"
                            required={required}
                        />
                        <label htmlFor={option} className="ml-2 text-gray-700">
                            {option}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RadioInput;
