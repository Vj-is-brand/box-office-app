import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Show from './pages/shows';
import Starred from './pages/Starred';


const queryClient = new QueryClient();

const App = () => {
  return (
     <QueryClientProvider client={queryClient}>
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
     </QueryClientProvider>
  );
};

export default App;
