import { Button, BackButton } from "../components";
import { useUserInfoContext } from "../contexts/UserInfoContext";

const SummaryPage: React.FC = () => {
    const { userInfo } = useUserInfoContext();

    return (
        <div className="flex flex-col gap-5 items-center justify-center h-screen bg-gray-100 p-6">
            <h2 className="text-3xl font-semibold mb-6">Summary</h2>

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
        </div>
    );
};

export default SummaryPage;
