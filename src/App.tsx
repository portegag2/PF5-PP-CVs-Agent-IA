import React, { useRef } from 'react';
import { CV } from './components/CV';
import { useCVStore } from './store/cvStore';
import { Header } from './components/Header';
import './App.css';

function App() {
  const { selectedTheme, setSelectedTheme } = useCVStore();

  const toggleTheme = () => {
    setSelectedTheme(selectedTheme === 'classic' ? 'modern' : 'classic');
  };

  const cvRef = useRef<HTMLDivElement>(null);

  return (
    <div id="app-container" className="min-h-screen bg-gray-100">
      <Header selectedTheme={selectedTheme} toggleTheme={toggleTheme} cvRef={cvRef} />
      <CV cvRef={cvRef} />
    </div>
  );
}

export default App;
