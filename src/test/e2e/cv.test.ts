import { test, expect } from '@playwright/test';
import { CV } from '../types/cv';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('should display all sections of the CV', async ({ page }) => {
  // Get the mock CV data
  const mockCV: CV = {
    personalInfo: {
      name: 'Test User',
      email: 'test@example.com',
      phone: '123456789',
      location: 'Test Location',
      linkedin: 'linkedin.com/test',
      github: 'github.com/test'
    },
    profile: 'Test profile',
    experiences: [
      {
        title: 'Test Position',
        company: 'Test Company',
        startDate: '2022-01',
        endDate: 'Present',
        description: ['Test description']
      }
    ],
    education: [
      {
        title: 'Test Degree',
        institution: 'Test University',
        startDate: '2020-01',
        endDate: '2022-01',
        description: ['Test education']
      }
    ],
    skills: [
      {
        name: 'Test Skill',
        level: 'Advanced',
        description: 'Test skill description'
      }
    ]
  };

  // Inject the mock CV data
  await page.evaluate((cvData) => {
    window.localStorage.setItem('mockCV', JSON.stringify(cvData));
  }, mockCV);

  // Wait for the CV to be rendered
  await page.waitForSelector('h1');

  // Verify personal info
  await expect(page.getByText(mockCV.personalInfo.name)).toBeVisible();
  await expect(page.getByText(mockCV.personalInfo.email)).toBeVisible();
  await expect(page.getByText(mockCV.personalInfo.phone)).toBeVisible();

  // Verify profile
  await expect(page.getByText(mockCV.profile)).toBeVisible();

  // Verify experience
  await expect(page.getByText(mockCV.experiences[0].title)).toBeVisible();
  await expect(page.getByText(mockCV.experiences[0].company)).toBeVisible();

  // Verify education
  await expect(page.getByText(mockCV.education[0].title)).toBeVisible();
  await expect(page.getByText(mockCV.education[0].institution)).toBeVisible();

  // Verify skills
  await expect(page.getByText(mockCV.skills[0].name)).toBeVisible();
  await expect(page.getByText(mockCV.skills[0].level)).toBeVisible();
});
