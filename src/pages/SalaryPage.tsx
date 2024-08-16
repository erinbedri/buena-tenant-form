import { Form } from "../components";
import { PATHS } from "../utils/urls";

const SalaryPage: React.FC = () => {
    return (
        <Form
            title="Select Your Salary Range"
            fieldName="salary"
            fieldLabel="Salary Range"
            fieldType="radio"
            options={["0 - 1.000", "1.000 - 2.000", "2.000 - 3.000", "3.000 - 4.000", "more than 4.000"]}
            nextPath={PATHS.SUMMARY}
        />
    );
};

export default SalaryPage;
