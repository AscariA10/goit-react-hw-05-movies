import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
   return (
      <>
         <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
         </nav>
         <div>
            <Outlet />
         </div>
      </>
   );
};
