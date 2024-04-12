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

    const elements = await screen.findAllByRole('listitem');

    expect(elements).toHaveLength(2);
  });
});
