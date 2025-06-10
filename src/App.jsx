import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoveScreen from './pages/LoveScreen';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/love" element={<LoveScreen />} />
    </Routes>
  );
}

export default App;