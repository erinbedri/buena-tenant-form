import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useUserInfoContext } from "../contexts/UserInfoContext";
import { BackButton, Button, TextInput } from "../components";
import { PATHS } from "../utils/urls";

const PhonePage: React.FC = () => {
    const { userInfo, setUserInfo } = useUserInfoContext();
    const [phone, setPhone] = useState(userInfo.phone);

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setUserInfo({ ...userInfo, phone });

        navigate(PATHS.SALARY);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
            <h2 className="text-3xl font-semibold mb-6">Enter Your Phone Number</h2>

            <form onSubmit={handleSubmit} className="w-full max-w-xl">
                <TextInput
                    id="phone"
                    type="tel"
                    label="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    pattern="^(\+49\s?)?[1-9][0-9]{1,4}\s?-?\s?[0-9]{3,9}$"
                />

                <div className="flex gap-5">
                    <BackButton />

                    {phone && <Button type="submit">Next</Button>}
                </div>
            </form>
        </div>
    );
};

export default PhonePage;
