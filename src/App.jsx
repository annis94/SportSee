import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Sidebar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:userSlug" element={<Dashboard />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;