import { create } from 'zustand';
import { CV, PersonalInfo } from '../types/cv';

import mockCV from '../data/mockCV.json';

interface CVState {
  cv: CV;
  selectedTheme: 'classic' | 'modern';
  setCV: (cv: CV) => void;
  setSelectedTheme: (theme: 'classic' | 'modern') => void;
}

export const useCVStore = create<CVState>((set) => ({
  cv: mockCV,
  selectedTheme: 'classic',
  setCV: (cv) => set({ cv }),
  setSelectedTheme: (theme) => set({ selectedTheme: theme })
}));
