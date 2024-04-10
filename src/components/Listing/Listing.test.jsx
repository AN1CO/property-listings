import { cleanup, fireEvent, render } from '@testing-library/react';
import LikeButton from './Listing';

const testData = {
  listDate: '1998-03-06T17:52:34.065631Z',
  listPrice: 23507305,
  address: {
    city: 'Katy',
    state: 'Texas',
    streetName: 'WEST DEEP COURT',
    streetNumberText: '46761',
  },
  property: {
    area: 2130,
    bathsFull: 2,
    bathsHalf: 3,
    bedrooms: 3,
  },
};

test('Listing', () => {});
