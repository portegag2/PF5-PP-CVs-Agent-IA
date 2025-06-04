import { render } from '@testing-library/react';
import { useCVStore } from '../store/cvStore';
import { CV } from '../types/cv';

// Custom render function that provides the Zustand store
export const renderWithStore = (ui: React.ReactElement, cv: CV) => {
  const originalUseStore = useCVStore;
  
  // Mock the store
  jest.mock('../store/cvStore', () => ({
    useCVStore: () => ({
      cv,
      selectedTheme: 'classic',
      setCV: jest.fn(),
      setSelectedTheme: jest.fn()
    })
  }));

  const result = render(ui);

  // Restore the original store after the test
  jest.resetModules();
  useCVStore.mockImplementation(originalUseStore);

  return result;
};
