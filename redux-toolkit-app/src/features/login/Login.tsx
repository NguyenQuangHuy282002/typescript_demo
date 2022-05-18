import React, { Children, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Import the action from slice:
import { clearState, loginSelector, submit } from "./loginSlices";
import { Navigate, Outlet, Route, useNavigate } from "react-router-dom";

// export function PrivateRoute({ children, ...rest }) {
//   const { isLogin } = useSelector(loginSelector);

//   return (
//     <Route
//       {...rest}
//       render={() => (isLogin ? children : <Navigate to="/" />)}
//     />
//   );
// }
export const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const { isLogin } = useSelector(loginSelector);
  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setInput({ username: "", password: "" });
    dispatch(
      submit({
        username: input.username,
        password: input.password,
        isLogin: false,
      })
    );
  };
  useEffect(() => {
    if (isLogin) {
      dispatch(clearState);
      navigate("/app");
    }
  }, [isLogin]);

  return (
    <div className="container col-md-5 mt-5">
      <form>
        <div className="form-outline mb-4">
          <input
            type="text"
            name="username"
            className="form-control"
            value={input.username}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <label className="form-label">Username</label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            name="password"
            className="form-control"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <label className="form-label">Password</label>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={handleSubmit}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};
