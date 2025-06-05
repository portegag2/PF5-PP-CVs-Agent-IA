import { create } from 'zustand';
import { CV, PersonalInfo } from '../types/cv';

import mockCV from '../data/mock-pedroOrtegaCV.json';

interface CVState {
  cv: CV;
  selectedTheme: 'classic' | 'modern';
}

const useCVStore = create<CVState>((set) => ({
  cv: mockCV[0],
  selectedTheme: 'classic',
  setCV: (cv) => set({ cv }),
  setSelectedTheme: (theme) => set({ selectedTheme: theme })
}));

export { useCVStore };
