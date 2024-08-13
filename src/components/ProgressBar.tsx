import React from "react";
import { useLocation } from "react-router-dom";

const steps = [
    { name: "Name Info", path: "/name-info" },
    { name: "Email Info", path: "/email-info" },
    { name: "Phone Info", path: "/phone-info" },
    { name: "Salary Info", path: "/salary-info" },
    { name: "Summary", path: "/summary" },
];

const ProgressBar: React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const currentIndex = steps.findIndex((step) => step.path === currentPath);
    const totalSteps = steps.length;

    const progressWidth = totalSteps > 0 ? ((currentIndex + 1) / totalSteps) * 100 : 0;

    if (progressWidth === 0) {
        return null;
    }

    return (
        <div className="fixed bottom-10 left-0 right-0 px-8 py-2 rounded-full overflow-hidden">
            <div
                className="bg-gray-600 text-xs font-medium text-gray-100 text-center p-1 leading-none rounded-full"
                style={{ width: `${progressWidth}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
