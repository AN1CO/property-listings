import { useLocation, NavLink } from 'react-router-dom';

const Header = () => {
  let location = useLocation();
  return (
    <nav
      className="navbar navbar-expand-lg mb-2"
      style={{ backgroundColor: '#F4F4F4' }}
    >
      <div className="container-fluid">
        {/* TODO: add styled components to turn this NavLink into a styled component, instead of putting styles directly here */}
        <NavLink
          to="/"
          className="navbar-brand"
          style={{
            color: '#000',
          }}
        >
          <h1
            className="m-3 ms-4 center"
            style={{ fontWeight: 600, fontSize: '28px', lineHeight: '40px' }}
          >
            {location.pathname === '/' && 'Property Listings'}
          </h1>
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
