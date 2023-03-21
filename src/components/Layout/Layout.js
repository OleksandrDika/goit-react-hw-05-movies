import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ListLayout, NavItem } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      {' '}
      <ListLayout>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/movies">Movies</NavLink>
        </NavItem>
      </ListLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
