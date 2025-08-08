import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ReduxHome from './features/redux/pages/ReduxHome';
import ZustandHome from './features/zustand/pages/ZustandHome';
import Home from './Home';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/redux">redux</Link></li>
          <li><Link to="/zustand">zustand</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/redux" element={<ReduxHome />} />
        <Route path="/zustand" element={<ZustandHome />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
