import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { getUsers } from "../data";

export default function Users() {
  let users = getUsers();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <Navbar></Navbar>

      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}
        >
          <input
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {users
            .filter((user) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = user.name.toLowerCase();
              return name.includes(filter.toLowerCase());
            })
            .map((user) => (
              <NavLink
                style={({ isActive }) => ({
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                  textDecoration: "none",
                })}
                to={`/users/${user.name}`}
                key={user.name}
              >
                {user.name}
              </NavLink>
            ))}
        </nav>
        <Outlet />
      </div>
    </>
  );
}
