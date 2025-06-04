import React from 'react';
import { CV } from './components/CV';
import { useCVStore } from './store/cvStore';
import './App.css';

function App() {
  const { selectedTheme, setSelectedTheme } = useCVStore();

  const toggleTheme = () => {
    setSelectedTheme(selectedTheme === 'classic' ? 'modern' : 'classic');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="fixed top-4 right-4 z-50 flex gap-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-md font-medium transition-colors"
        >
          {selectedTheme === 'classic' ? 'Tema Moderno' : 'Tema Clásico'}
        </button>
      </div>
      <CV />
    </div>
  );
}

export default App;
