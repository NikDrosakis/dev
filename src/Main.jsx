import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import FallbackSpinner from './components/FallbackSpinner';
import NavBarWithRouter from './components/NavBar';
import Home from './components/Home';
import endpoints from './constants/endpoints';
// import axios from 'axios';
// const config = axios.create({
//     baseURL: 'https://dev.nikosdrosakis.gr:3001/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
// });
function Main() {
  const [data, setData] = useState(false);
    useEffect(() => {
        const fetchData = async () =>{
            fetch(process.env.REACT_APP_HTTP_API+endpoints.routes, {
                method: 'GET',
            })
                .then((res) => res.json())
                .then((res) => setData(res))
                .catch((err) => err);
        }
        fetchData();
    }, []);

  return (
    <div className="Main">
        <NavBarWithRouter />
      <main className="main">
          <Suspense fallback={ <FallbackSpinner /> }>
        <Routes>
            <Route exact="true"  path="/" element={ <Home/> } />
            {data && data.sections.map((dat) => {
                const SectionComponent = React.lazy(() => import('./components/' + dat.component));
                return (
                  <Route key={dat.headerTitle} path={ dat.path } element={ <SectionComponent header={ dat.headerTitle } /> }/>
                );
              })}
        </Routes>
          </Suspense>
      </main>
    </div>
  );
}

export default Main;
