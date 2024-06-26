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
    <div className="container-fluid pt-4">
      <ul className="d-flex flex-sm-row row mx-2 gx-4 gy-4 g-4 justify-content-center justify-content-lg-start">
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
      </ul>
    </div>
  );
};

export default Listings;
