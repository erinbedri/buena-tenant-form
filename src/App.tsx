import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header, ProgressBar } from "./components";
import { HomePage, NamePage } from "./pages";

function App() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/name" element={<NamePage />} />
                <Route path="/email" element={<h1>Tenant Email Info Page</h1>} />
                <Route path="/phone" element={<h1>Tenant Name Info Page</h1>} />
                <Route path="/salary" element={<h1>Salary Info Page</h1>} />
                <Route path="/summary" element={<h1>Summary Page</h1>} />
            </Routes>

            <ProgressBar />
        </Router>
    );
}

export default App;
