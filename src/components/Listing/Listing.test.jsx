import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Listing from './Listing';

const testData = {
  listDate: '1998-03-06T17:52:34.065631Z',
  listPrice: 23507305,
  mlsId: 1005212,
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
  photos: [
    'https://fastly.picsum.photos/id/237/200/300.jpg',
    'https://fastly.picsum.photos/id/866/200/300.jpg',
  ],
};

describe('Listing', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
        removeItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should display data correctly', () => {
    render(
      <Listing
        photo={testData.photos[0]}
        mlsId={testData.mlsId}
        address={testData.address}
        listingDate={testData.listDate}
        listPrice={testData.listPrice}
        property={testData.property}
      />,
    );
    const heading1 = screen.getByRole('heading', {
      name: '3 BR | 3.5 Bath | 2130 Sq Ft',
    });
    const heading2 = screen.getByRole('heading', {
      name: '$23,507,305',
    });
    const paragraph1 = screen.getByText(/46761 West Deep Court, Katy, TX/i);
    const paragraph2 = screen.getByText('Listed: 3/6/1998');
    const pic = screen.getByRole('img');
    const btn = screen.getByRole('button', { name: 'favorite' });

    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();

    expect(btn).toBeInTheDocument();

    expect(pic).toBeInTheDocument();
    expect(pic).toHaveAttribute(
      'src',
      'https://fastly.picsum.photos/id/237/200/300.jpg',
    );
  });

  it('should let heart button to be clicked and change image style on click and add mslID to local storage and clicking again should remove it and revert styling', () => {
    render(
      <Listing
        photo={testData.photos[0]}
        mlsId={testData.mlsId}
        address={testData.address}
        listingDate={testData.listDate}
        listPrice={testData.listPrice}
        property={testData.property}
      />,
    );

    const btn = screen.getByRole('button', { name: 'favorite' });

    expect(btn).toHaveAttribute('src', 'heart-stroke.svg');

    fireEvent.click(btn);
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      '1005212',
      '1005212',
    );
    expect(btn).toHaveAttribute('src', 'heart-fill.svg');

    fireEvent.click(btn);
    expect(window.localStorage.removeItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.removeItem).toHaveBeenCalledWith('1005212');
    expect(btn).toHaveAttribute('src', 'heart-stroke.svg');
  });
});
