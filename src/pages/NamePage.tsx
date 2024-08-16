import { Form } from "../components";
import { PATHS } from "../utils/urls";

const NamePage: React.FC = () => {
    return (
        <Form
            title="What is your full name?"
            fieldName="fullName"
            fieldLabel="Enter your full name"
            fieldType="text"
            placeholder="John Doe"
            nextPath={PATHS.EMAIL}
        />
    );
};

export default NamePage;
