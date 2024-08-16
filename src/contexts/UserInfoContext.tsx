import React, { useContext, useState, ReactNode } from "react";

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

    return <AppContext.Provider value={{ userInfo, setUserInfo }}>{children}</AppContext.Provider>;
};

export const useUserInfoContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useUserInfoContext must be used within a UserInfoContextProvider");
    }
    return context;
};

export { UserInfoContextProvider };
