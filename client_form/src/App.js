import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SaveAddressPage from './Components/SaveAddressPage';
import FindAddressPage from './Components/FindAddressPage';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SaveAddressPage/>} />
        <Route path="/search" element={<FindAddressPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
