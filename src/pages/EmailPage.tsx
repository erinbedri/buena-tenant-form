import { Form } from "../components";
import { PATHS } from "../utils/urls";

const EmailPage: React.FC = () => {
    return (
        <Form
            title="Enter Your Email Address"
            fieldName="email"
            fieldLabel="Email Address"
            fieldType="email"
            nextPath={PATHS.PHONE}
        />
    );
};

export default EmailPage;
