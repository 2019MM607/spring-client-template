import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Admin</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/clients">Clientes</Link>
          </li>
          <li>
            <Link to="/city">Ciudades</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
