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
    <div className="container-sm pt-4">
      <div className="flex-sm-row row g-4 justify-content-between justify-content-sm-center justify-content-lg-start">
        {listings.map((listing) => {
          const { address, property, listDate, listPrice, photos, mlsId } =
            listing;
          return (
            <Listing
              key={mlsId}
              mlsId={mlsId}
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
