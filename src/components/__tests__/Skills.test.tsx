import { render, screen } from '@testing-library/react';
import { Skills } from '../Skills';

const mockSkills = [
  {
    name: 'Test Skill 1',
    level: 'Advanced',
    description: 'Test description 1'
  },
  {
    name: 'Test Skill 2',
    level: 'Intermediate',
    description: 'Test description 2'
  }
];

describe('Skills Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all skills correctly', () => {
    render(<Skills skills={mockSkills} />);

    mockSkills.forEach(skill => {
      expect(screen.getByText(skill.name)).toBeInTheDocument();
      expect(screen.getByText(skill.level)).toBeInTheDocument();
      expect(screen.getByText(skill.description)).toBeInTheDocument();
    });
  });

  it('renders skill levels with correct progress bars', () => {
    render(<Skills skills={mockSkills} />);

    const progressBars = screen.getAllByRole('progressbar');
    expect(progressBars).toHaveLength(mockSkills.length);

    // Verify progress bar widths based on skill level
    const advancedBar = progressBars[0];
    const intermediateBar = progressBars[1];

    expect(advancedBar).toHaveStyle('width: 100%');
    expect(intermediateBar).toHaveStyle('width: 70%');
  });

  it('renders empty skills list', () => {
    render(<Skills skills={[]} />);

    expect(screen.queryByText('Test Skill 1')).not.toBeInTheDocument();
  });
});
