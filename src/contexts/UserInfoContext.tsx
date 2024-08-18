import React, { useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface UserInfo {
    fullName: string;
    email: string;
    phone: string;
    salary: string;
    [key: string]: any;
}

interface AppContextProps {
    userInfo: UserInfo;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
    isSubmitted: boolean;
    setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
    reset: (navigate: (path: string) => void) => void; // Update reset type to accept a navigate function
}

const AppContext = React.createContext<AppContextProps | undefined>(undefined);

interface UserInfoContextProviderProps {
    children: ReactNode;
}

const UserInfoContextProvider: React.FC<UserInfoContextProviderProps> = ({ children }) => {
    const [userInfo, setUserInfo] = useState<UserInfo>({
        fullName: "",
        email: "",
        phone: "",
        salary: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const reset = (navigate: (path: string) => void) => {
        setIsSubmitted(false);
        setUserInfo({
            fullName: "",
            email: "",
            phone: "",
            salary: "",
        });
        navigate("/"); // Navigate to home page after reset
    };

    return (
        <AppContext.Provider value={{ userInfo, setUserInfo, isSubmitted, setIsSubmitted, reset }}>
            {children}
        </AppContext.Provider>
    );
};

export const useUserInfoContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useUserInfoContext must be used within a UserInfoContextProvider");
    }
    return context;
};

export { UserInfoContextProvider };
