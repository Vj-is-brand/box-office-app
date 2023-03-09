import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Show from './pages/shows';
import Starred from './pages/Starred';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
        </Route>

        <Route path="/shows/:showId" element={<Show/>} />
        <Route path="*" element={<div>404 Error Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
