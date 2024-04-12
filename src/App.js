import { Route, Routes } from 'react-router-dom';
import Listings from './pages/Listings';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Listings />} />
      </Routes>
    </div>
  );
}

export default App;
