import { Form } from "../components";
import { PATHS } from "../utils/urls";

const NamePage: React.FC = () => {
    return (
        <Form
            title="Enter Your Full Name"
            fieldName="fullName"
            fieldLabel="Full Name"
            fieldType="text"
            nextPath={PATHS.EMAIL}
        />
    );
};

export default NamePage;
