import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import LoveLetter from './pages/LoveLetter';
import Proposal from './pages/Proposal';
import Success from './pages/Success';
import FloatingHearts from './components/FloatingHearts';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <Router>
      {/* Background and Global Elements */}
      <div className="relative min-h-screen overflow-hidden">
        <FloatingHearts />
        <MusicPlayer />
        
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/letter" element={<LoveLetter />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
