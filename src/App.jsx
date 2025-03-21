import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./pages/Register"
import Main from './pages/Main';
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Main />} />
            </Routes>
        </Router>
    )
}

export default App
