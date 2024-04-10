const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

const Listing = ({ photo, address, listingDate, listPrice, property }) => {
  const baths = property.bathsFull + property.bathsHalf * 0.5;
  const date = new Date(listingDate);

  return (
    <div className="m-2 card border-light col-sm-3" style={{ width: '290px' }}>
      <img
        src={photo}
        alt=""
        className="card-img-top"
        width="315"
        height="280"
        style={{ objectFit: 'cover' }}
      />
      {/* TODO: use styled components to cut down on styling repetition */}
      <h2
        style={{
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '32px',
          color: '#2D2D2D',
        }}
      >{`${property.bedrooms} BR | ${baths} Bath | ${property.area} Sq Ft`}</h2>
      <h3
        style={{
          fontWeight: 700,
          fontSize: '26px',
          lineHeight: '24px',
          color: '#2D2D2D',
        }}
      >{`$${listPrice.toLocaleString()}`}</h3>
      {/* TODO: would probably use a library to translate full state names to abbreviations and make it more dynamic. hardcoded here just for text data */}
      <p
        style={{ fontSize: '15px', color: '#2D2D2D' }}
      >{`${address.streetNumberText} ${titleCase(address.streetName)}, ${address.city}, ${address.state === 'Texas' ? 'TX' : null}`}</p>
      <p
        style={{ fontSize: '14px', color: '#979797' }}
      >{`Listed: ${date.toLocaleDateString()}`}</p>
    </div>
  );
};

export default Listing;
