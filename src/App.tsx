import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/pages/Home';
import Biografia from './components/pages/Biografia';
import Video from './components/pages/Video';
import Navbar from './components/ui/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Biografia />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;
