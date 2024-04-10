import { useEffect, useState } from 'react';
import { getListings } from '../api/api';
import Listing from '../components/Listing/Listing';

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    getListings().then((res) => {
      setListings(res);
    });
  }, []);

  return (
    <div className="container-sm">
      <div className="row gap-2 justify-content-sm-center">
        {listings.map((listing) => {
          console.log(listing);
          const { address, property, listDate, listPrice, photos } = listing;

          return (
            <Listing
              address={address}
              listingDate={listDate}
              property={property}
              listPrice={listPrice}
              photo={photos[0]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Listings;
