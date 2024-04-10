import { useLocation, NavLink } from 'react-router-dom';

const Header = () => {
    let location = useLocation();
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className='container-fluid'>
            {/* TODO: add styled components to turn this NavLink into a styled component, instead of putting styles directly here */}
            <NavLink exact to="/" className="navbar-brand" style={{
                color: "#000"
            }}>
                <h1>{location.pathname === "/" && "Property Listings"}</h1>
            </NavLink>    
        </div>
      </nav>
    );
  };
  
  export default Header;