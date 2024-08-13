import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/name-info" element={<h1>Tenant Name Info Page</h1>} />
                <Route path="/email-info" element={<h1>Tenant Email Info Page</h1>} />
                <Route path="/phone-info" element={<h1>Tenant Name Info Page</h1>} />
                <Route path="/salary-info" element={<h1>Salary Info Page</h1>} />
                <Route path="/summary" element={<h1>Summary Page</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
