import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const SharedLayout = () => {
   return (
      <>
         <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
         </nav>
         <div>
            <Suspense fallback={<div>Loading...</div>}>
               <Outlet />
            </Suspense>
         </div>
      </>
   );
};
