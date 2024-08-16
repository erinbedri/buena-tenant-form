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
}

const Form: React.FC<FormProps> = ({ title, fieldName, fieldLabel, fieldType, nextPath, pattern }) => {
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
                <TextInput
                    id={fieldName}
                    type={fieldType}
                    label={fieldLabel}
                    value={fieldValue}
                    onChange={(e) => setFieldValue(e.target.value)}
                    pattern={pattern}
                    required
                />

                <div className="flex gap-5">
                    <BackButton />
                    {fieldValue && <Button type="submit">Next</Button>}
                </div>
            </form>
        </div>
    );
};

export default Form;
