import { Button, BackButton, Container } from "../components";
import { useUserInfoContext } from "../contexts/UserInfoContext";

const SummaryPage: React.FC = () => {
    const { userInfo } = useUserInfoContext();

    return (
        <Container title="Summary" titleSize="text-3xl">
            <div>
                <p>
                    <b>Full Name:</b> {userInfo.fullName}
                </p>
                <p>
                    <b>Email Address:</b> {userInfo.email}
                </p>
                <p>
                    <b>Phone Number:</b> {userInfo.phone}
                </p>
                <p>
                    <b>Salary Range:</b> {userInfo.salary}
                </p>
            </div>

            <div className="flex gap-5">
                <BackButton />
                <Button type="submit">Submit</Button>
            </div>
        </Container>
    );
};

export default SummaryPage;
