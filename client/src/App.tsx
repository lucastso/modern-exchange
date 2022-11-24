import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Transaction from "./pages/transaction";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/transaction" element={<Transaction />} />
            </Routes>
        </Router>
    );
}

export default App;
