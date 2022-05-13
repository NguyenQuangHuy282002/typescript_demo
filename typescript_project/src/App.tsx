import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input } from "./components/input";
import { Link, Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { addUser } from "./data";

function App() {
  const [input, setInput] = useState({ name: "", age: "", address: "" });
  const [check, setCheck] = useState({});
  const [isPopup, setIsPopup] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    let array = Object.values(check);
    setDisabled(array.includes(true));
  }, [check, disabled]);

  function checkInput(e: string, v: string, n: string) {
    if (e !== "" || v === "") {
      setCheck({ ...check, [n]: true });
    } else {
      setCheck({ ...check, [n]: false });
      setInput({ ...input, [n]: v });
    }
  }

  function handleOnSubmit() {
    console.log(input);
    setIsPopup(true);
    addUser(input);
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="container col-md-5 mt-5">
        <form>
          <Input
            name="Name"
            type="text"
            validate={RegExp("^[a-zA-Z]+$")}
            errorMessage="Name must contain only letters"
            checkInput={checkInput}
          ></Input>
          <Input name="Age" type="number" checkInput={checkInput}></Input>
          <div className="form-group">
            <label>Gender</label>
            <select className="form-control">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <Input
            name="Address"
            type="text"
            validate={RegExp("@(e|g)mail.com$")}
            errorMessage="Wrong gmail"
            checkInput={checkInput}
          ></Input>
          <button
            type="button"
            disabled={disabled}
            onClick={handleOnSubmit}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
      {isPopup && (
        <div className="container col-md-5 mt-5">
          <p>Name: {input.name}</p>
          <p>Age: {input.age}</p>
          <p>Address: {input.address}</p>
        </div>
      )}
    </>
  );
}

export default App;
