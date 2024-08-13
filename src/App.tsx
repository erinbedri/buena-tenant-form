import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage, TenantNamePage } from "./pages";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/name-info" element={<TenantNamePage />} />
                <Route path="/email-info" element={<h1>Tenant Email Info Page</h1>} />
                <Route path="/phone-info" element={<h1>Tenant Name Info Page</h1>} />
                <Route path="/salary-info" element={<h1>Salary Info Page</h1>} />
                <Route path="/summary" element={<h1>Summary Page</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
