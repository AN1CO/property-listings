import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Listings from './Listings';
import { testAPIData } from '../../mocks/mocks';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(testAPIData),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});
describe('Listings', () => {
  it('should load data as multiple elements', async () => {
    render(<Listings />);

    const element1 = await screen.findByRole('heading', {
      name: '4 BR | 4.5 Bath | 722 Sq Ft',
    });
    const element2 = await screen.findByRole('heading', {
      name: '3 BR | 3.5 Bath | 2130 Sq Ft',
    });

    expect(element1).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
  });
});
