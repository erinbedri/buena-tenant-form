import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useUserInfoContext } from "../contexts/UserInfoContext";
import { BackButton, Button, TextInput } from "../components";
import { PATHS } from "../utils/urls";

const EmailPage: React.FC = () => {
    const { userInfo, setUserInfo } = useUserInfoContext();
    const [email, setEmail] = useState(userInfo.email);

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setUserInfo({ ...userInfo, email });

        navigate(PATHS.PHONE);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
            <h2 className="text-3xl font-semibold mb-6">Enter Your Email Address</h2>

            <form onSubmit={handleSubmit} className="w-full max-w-xl">
                <TextInput
                    id="email"
                    type="email"
                    label="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className="flex gap-5">
                    <BackButton />

                    {email && <Button type="submit">Next</Button>}
                </div>
            </form>
        </div>
    );
};

export default EmailPage;
