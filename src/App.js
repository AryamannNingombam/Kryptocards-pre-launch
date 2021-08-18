import logo from './logo.svg';
import './App.css';
import React, { useEffect, lazy, Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRoutes} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';


const Home = lazy(() =>import('./pages/home/Home'));
const About = lazy(()=>import('./pages/about/About'));
const Projects = lazy(()=>import('./pages/projects/Projects'));



function App() {

  const MainRoutes =[
    { path: '/', element: <Home/>,
 
  },
  {path :'/about',element : <About/>},
  {path : '/projects',element : <Projects/>}

  ]

  const mainRouting = useRoutes(MainRoutes);


  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>

      {mainRouting}
      </Suspense>
    </>
  );
}

export default App;
