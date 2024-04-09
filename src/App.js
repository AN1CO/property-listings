import { Route, Routes } from 'react-router-dom';
import Listings from './pages/Listings';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Listings />} />
      </Routes>
    </div>
  );
}

export default App;
