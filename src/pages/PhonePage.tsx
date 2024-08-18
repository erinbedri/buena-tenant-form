import { Form } from "../components";
import { PATHS } from "../utils/urls";

const PhonePage: React.FC = () => {
    return (
        <Form
            title="Enter Your Phone Number"
            fieldName="phone"
            fieldType="tel"
            nextPath={PATHS.SALARY}
            placeholder="+49 151 12345678"
            pattern="^(\+49\s?)?[1-9][0-9]{1,4}\s?-?\s?[0-9]{3,9}$"
        />
    );
};

export default PhonePage;
