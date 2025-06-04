import { render, screen } from '@testing-library/react';
import { PersonalInfo } from '../PersonalInfo';
import { renderWithStore } from '../../utils/test-utils';
import { useCVStore } from '../../store/cvStore';

const mockPersonalInfo = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '123456789',
  location: 'Test Location',
  linkedin: 'linkedin.com/test',
  github: 'github.com/test'
};

describe('PersonalInfo Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders personal information correctly', () => {
    renderWithStore(<PersonalInfo info={mockPersonalInfo} />, {
      personalInfo: mockPersonalInfo,
      profile: '',
      experiences: [],
      education: [],
      skills: []
    });

    expect(screen.getByText(mockPersonalInfo.name)).toBeInTheDocument();
    expect(screen.getByText(mockPersonalInfo.email)).toBeInTheDocument();
    expect(screen.getByText(mockPersonalInfo.phone)).toBeInTheDocument();
    expect(screen.getByText(mockPersonalInfo.location)).toBeInTheDocument();
    expect(screen.getByText(mockPersonalInfo.linkedin)).toBeInTheDocument();
    expect(screen.getByText(mockPersonalInfo.github)).toBeInTheDocument();
  });

  it('renders correctly when social links are missing', () => {
    const infoWithoutLinks = {
      ...mockPersonalInfo,
      linkedin: undefined,
      github: undefined
    };

    renderWithStore(<PersonalInfo info={infoWithoutLinks} />, {
      personalInfo: infoWithoutLinks,
      profile: '',
      experiences: [],
      education: [],
      skills: []
    });

    expect(screen.queryByText(mockPersonalInfo.linkedin)).not.toBeInTheDocument();
    expect(screen.queryByText(mockPersonalInfo.github)).not.toBeInTheDocument();
  });
});
