import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUserInfoContext } from "../contexts/UserInfoContext";
import { BackButton, Button, TextInput, RadioInput, Container } from "../components";

interface FormProps {
    title: string;
    fieldName: string;
    fieldLabel: string;
    fieldType: string;
    placeholder?: string;
    nextPath: string;
    pattern?: string;
    options?: string[];
}

const Form: React.FC<FormProps> = ({
    title,
    fieldName,
    fieldLabel,
    fieldType,
    placeholder,
    nextPath,
    pattern,
    options,
}) => {
    const { userInfo, setUserInfo } = useUserInfoContext();
    const [fieldValue, setFieldValue] = useState(userInfo[fieldName]);

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setUserInfo({ ...userInfo, [fieldName]: fieldValue });

        navigate(nextPath);
    };

    return (
        <Container title={title} titleSize="text-3xl">
            <form onSubmit={handleSubmit} className="w-full max-w-xl">
                {fieldType === "radio" && options ? (
                    <RadioInput
                        label={fieldLabel}
                        fieldName={fieldName}
                        options={options}
                        selectedValue={fieldValue}
                        onChange={(e) => setFieldValue(e.target.value)}
                        required
                    />
                ) : (
                    <TextInput
                        id={fieldName}
                        type={fieldType}
                        label={fieldLabel}
                        value={fieldValue}
                        placeholder={placeholder}
                        onChange={(e) => setFieldValue(e.target.value)}
                        pattern={pattern}
                        required
                    />
                )}

                <div className="flex justify-center gap-5">
                    <BackButton />
                    {fieldValue && <Button type="submit">Next</Button>}
                </div>
            </form>
        </Container>
    );
};

export default Form;
