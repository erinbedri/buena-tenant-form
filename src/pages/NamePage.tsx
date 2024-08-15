import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useUserInfoContext } from "../contexts/UserInfoContext";
import { BackButton, Button, TextInput } from "../components";
import { PATHS } from "../utils/urls";

const NamePage: React.FC = () => {
    const { userInfo, setUserInfo } = useUserInfoContext();
    const [fullName, setFullName] = useState(userInfo.fullName || "");

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setUserInfo({ ...userInfo, fullName });

        navigate(PATHS.EMAIL);
    };

    console.log("User Info", userInfo);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
            <h2 className="text-3xl font-semibold mb-6">Enter Your Full Name</h2>

            <form onSubmit={handleSubmit} className="w-full max-w-xl">
                <TextInput
                    id="fullName"
                    label="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />

                <div className="flex gap-5">
                    <BackButton />

                    {fullName && <Button type="submit">Next</Button>}
                </div>
            </form>
        </div>
    );
};

export default NamePage;
