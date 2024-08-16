import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UserInfoContextProvider } from "./contexts/UserInfoContext";

import { Header, ProgressBar } from "./components";
import { HomePage, NamePage, EmailPage, PhonePage, SalaryPage, SummaryPage } from "./pages";
import { PATHS } from "./utils/urls";

function App() {
    return (
        <UserInfoContextProvider>
            <Router>
                <Header />

                <Routes>
                    <Route path={PATHS.HOME} element={<HomePage />} />
                    <Route path={PATHS.NAME} element={<NamePage />} />
                    <Route path={PATHS.EMAIL} element={<EmailPage />} />
                    <Route path={PATHS.PHONE} element={<PhonePage />} />
                    <Route path={PATHS.SALARY} element={<SalaryPage />} />
                    <Route path={PATHS.SUMMARY} element={<SummaryPage />} />
                </Routes>

                <ProgressBar />
            </Router>
        </UserInfoContextProvider>
    );
}

export default App;
