import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/sign-in/SignIn';
import Flights from './pages/Flights';
import Seats from './pages/Seats';
import Navbar from './components/Navbar';
import DashboardLayoutBasic from './pages/Dashboard';

function App() {
  return (
   <Router>
      <Routes>
      <Route path="/sign-in" element={<SignIn />} />

      <Route path="/" element={<Dashboard />}>
      <Route path="/flights" element={<Flights/> } />
     
            {/* Diğer alt rotalar... */}
          </Route>

      </Routes>


   </Router>


     
 
  );
}

export default App;