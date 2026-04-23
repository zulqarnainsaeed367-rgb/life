import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './comman/Navbar';
import About from './page/About';
import Home from './page/Home';
import Booking from './page/Booking';
import Services from './page/Services';
import Contact from './page/Contact';
import Docter from './page/Docter';
import Footer from './comman/Footer';

// Layout component
const MainLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'docter', element: <Docter /> },
      { path: 'booking', element: <Booking /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;