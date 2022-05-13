import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <ul className="nav justify-content-center mt-5">
        <li className="nav-item">
          <Link className="nav-link" style={{ color: "red" }} to="/">
            App
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{ color: "red" }} to="/users">
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{ color: "red" }} to="/expenses">
            Expenses
          </Link>
        </li>
      </ul>
    </>
  );
};
