import { Form } from "../components";
import { PATHS } from "../utils/urls";

const EmailPage: React.FC = () => {
    return (
        <Form
            title="Enter Your Email Address"
            fieldName="email"
            fieldType="email"
            placeholder="johndoe@email.com"
            nextPath={PATHS.PHONE}
        />
    );
};

export default EmailPage;
