import React from "react";
import { useLocation } from "react-router-dom";

import { STEPS } from "../utils/urls";

const ProgressBar: React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const currentIndex = STEPS.findIndex((step) => step.path === currentPath);
    const totalSteps = STEPS.length;

    const progressWidth = totalSteps > 0 ? ((currentIndex + 1) / totalSteps) * 100 : 0;

    if (progressWidth === 0) {
        return null;
    }

    return (
        <div className="fixed bottom-10 left-0 right-0 px-8 py-2">
            <div className="w-full bg-gray-300 h-4 rounded-full">
                <div className="bg-gray-600 h-full rounded-full" style={{ width: `${progressWidth}%` }}></div>
            </div>
        </div>
    );
};

export default ProgressBar;
