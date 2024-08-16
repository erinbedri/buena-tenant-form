import { Form } from "../components";
import { PATHS } from "../utils/urls";

const PhonePage: React.FC = () => {
    return (
        <Form
            title="Enter Your Phone Number"
            fieldName="phone"
            fieldLabel="Phone Number"
            fieldType="tel"
            nextPath={PATHS.SALARY}
        />
    );
};

export default PhonePage;
