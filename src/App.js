import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import EventListing from './EventListing';
import EventBooking from './EventBooking';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<EventListing />} />
        <Route path="/event/:id" element={<EventBooking />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
