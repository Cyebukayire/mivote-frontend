import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Poll from './views/Poll';
import Signup from './views/Signup';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/poll" element={<Poll />} />
    </Routes>
  );
}

export default App;
