import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUserInfoContext } from "../contexts/UserInfoContext";
import { BackButton, Button, TextInput, RadioInput, Container } from "../components";

interface FormProps {
    title: string;
    fieldName: string;
    fieldLabel?: string;
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
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!fieldValue) {
            setError("This field is required.");
            return;
        }

        setError(null);

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

                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                <div className="flex justify-center gap-5">
                    <BackButton />
                    {fieldValue && !error && <Button type="submit">Next</Button>}
                </div>
            </form>
        </Container>
    );
};

export default Form;
