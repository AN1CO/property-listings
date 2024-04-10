import { useEffect, useState } from "react";
import {getListings} from '../api/api'

const Listings = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        getListings().then((res) => {
            setListings(res)
        })
    }, [])
    

    return (
      <div>
        <h1>Property Listings</h1>
      </div>
    );
  };
  
  export default Listings;