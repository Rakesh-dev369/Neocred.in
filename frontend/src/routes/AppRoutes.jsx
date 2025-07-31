import { createBrowserRouter, Outlet } from 'react-router-dom';
import SimpleLayout from '../layouts/SimpleLayout';
import HomeSimple from '../pages/HomeSimple';
const Home = HomeSimple;
import Learn from '../pages/Learn';
import Tools from '../pages/Tools';
import Chatbot from '../pages/Chatbot';
import About from '../pages/About';
import Contact from '../pages/Contact';
import News from '../pages/News';
import Rewards from '../pages/Rewards';
import PanCheck from '../pages/PanCheck';
import LoanCheck from '../pages/LoanCheck';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import Disclaimer from '../pages/Disclaimer';
import Cookies from '../pages/Cookies';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SimpleLayout><Outlet /></SimpleLayout>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'learn',
        element: <Learn />
      },
      {
        path: 'tools',
        element: <Tools />
      },
      {
        path: 'chatbot',
        element: <Chatbot />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'rewards',
        element: <Rewards />
      },
      {
        path: 'pan-check',
        element: <PanCheck />
      },
      {
        path: 'loan-check',
        element: <LoanCheck />
      },
      {
        path: 'privacy',
        element: <Privacy />
      },
      {
        path: 'terms',
        element: <Terms />
      },
      {
        path: 'disclaimer',
        element: <Disclaimer />
      },
      {
        path: 'cookies',
        element: <Cookies />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);