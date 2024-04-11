import { getListings } from '../api/api';
import '@testing-library/jest-dom';
import { testAPIData } from '../../mocks/mocks';

describe('getListings', () => {
  it('fetches data', async () => {
    global.fetch = jest.fn().mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolve({
            json: () =>
              new Promise((resolve) => {
                resolve(testAPIData);
              }),
          });
        }),
    );
    const res = await getListings();
    expect(res).toEqual(testAPIData);
  });
});
