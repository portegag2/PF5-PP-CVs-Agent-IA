import { render, screen } from '@testing-library/react';
import { Experience } from '../Experience';

const mockExperience = {
  title: 'Test Position',
  company: 'Test Company',
  startDate: '2022-01',
  endDate: 'Present',
  description: [
    'Test description 1',
    'Test description 2'
  ]
};

describe('Experience Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders experience information correctly', () => {
    render(<Experience experience={mockExperience} />);

    expect(screen.getByText(mockExperience.title)).toBeInTheDocument();
    expect(screen.getByText(mockExperience.company)).toBeInTheDocument();
    expect(screen.getByText(`${mockExperience.startDate} - ${mockExperience.endDate}`)).toBeInTheDocument();
    
    mockExperience.description.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('renders a single description item', () => {
    const singleDescriptionExperience = {
      ...mockExperience,
      description: ['Single description item']
    };

    render(<Experience experience={singleDescriptionExperience} />);

    expect(screen.getByText('Single description item')).toBeInTheDocument();
  });
});
