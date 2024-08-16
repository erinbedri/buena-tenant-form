import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUserInfoContext } from "../contexts/UserInfoContext";
import { BackButton, Button, TextInput } from "../components";

interface FormProps {
    title: string;
    fieldName: string;
    fieldLabel: string;
    fieldType: string;
    nextPath: string;
    pattern?: string;
    options?: string[];
}

const Form: React.FC<FormProps> = ({ title, fieldName, fieldLabel, fieldType, nextPath, pattern, options }) => {
    const { userInfo, setUserInfo } = useUserInfoContext();
    const [fieldValue, setFieldValue] = useState(userInfo[fieldName]);

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setUserInfo({ ...userInfo, [fieldName]: fieldValue });

        navigate(nextPath);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
            <h2 className="text-3xl font-semibold mb-6">{title}</h2>

            <form onSubmit={handleSubmit} className="w-full max-w-xl">
                {fieldType === "radio" && options ? (
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-2">{fieldLabel}</label>
                        {options.map((option) => (
                            <div key={option} className="mb-2">
                                <input
                                    type="radio"
                                    id={option}
                                    name={fieldName}
                                    value={option}
                                    checked={fieldValue === option}
                                    onChange={(e) => setFieldValue(e.target.value)}
                                    className="mr-2"
                                />
                                <label htmlFor={option} className="text-gray-700">
                                    {option}
                                </label>
                            </div>
                        ))}
                    </div>
                ) : (
                    <TextInput
                        id={fieldName}
                        type={fieldType}
                        label={fieldLabel}
                        value={fieldValue}
                        onChange={(e) => setFieldValue(e.target.value)}
                        pattern={pattern}
                        required
                    />
                )}

                <div className="flex gap-5">
                    <BackButton />
                    {fieldValue && <Button type="submit">Next</Button>}
                </div>
            </form>
        </div>
    );
};

export default Form;
