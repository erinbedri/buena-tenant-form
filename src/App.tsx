import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header, ProgressBar } from "./components";
import { HomePage, NamePage, EmailPage } from "./pages";
import { PATHS } from "./utils/urls";

function App() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path={PATHS.HOME} element={<HomePage />} />
                <Route path={PATHS.NAME} element={<NamePage />} />
                <Route path={PATHS.EMAIL} element={<EmailPage />} />
                <Route path={PATHS.PHONE} element={<h1>Phone Info Page</h1>} />
                <Route path={PATHS.SALARY} element={<h1>Salary Info Page</h1>} />
                <Route path={PATHS.SUMMARY} element={<h1>Summary Page</h1>} />
            </Routes>

            <ProgressBar />
        </Router>
    );
}

export default App;
