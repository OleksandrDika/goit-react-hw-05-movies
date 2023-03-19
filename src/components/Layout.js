import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      {' '}
      <ul style={{ listStyle: 'none' }}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default Layout;
