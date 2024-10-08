import { useNavigate } from "react-router-dom";

import { Button, BackButton, Container } from "../components";
import { useUserInfoContext } from "../contexts/UserInfoContext";

const SummaryPage: React.FC = () => {
    const { userInfo, isSubmitted, setIsSubmitted, reset } = useUserInfoContext();

    const navigate = useNavigate();

    if (isSubmitted) {
        return (
            <Container title="Thank you for your registration!" titleSize="text-5xl">
                <Button onClick={() => reset(navigate)}>New Application</Button>
            </Container>
        );
    }

    return (
        <Container title="Summary" titleSize="text-3xl">
            <div className="space-y-3">
                <p className="text-lg">
                    <span className="font-medium">Full Name:</span> {userInfo.fullName}
                </p>
                <p className="text-lg">
                    <span className="font-medium">Email Address:</span> {userInfo.email}
                </p>
                <p className="text-lg">
                    <span className="font-medium">Phone Number:</span> {userInfo.phone}
                </p>
                <p className="text-lg">
                    <span className="font-medium">Salary Range:</span> {userInfo.salary}
                </p>
            </div>

            <div className="flex gap-5">
                <BackButton />
                <Button onClick={() => setIsSubmitted(true)}>Submit</Button>
            </div>
        </Container>
    );
};

export default SummaryPage;
