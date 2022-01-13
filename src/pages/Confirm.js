import React, { useEffect, useState } from "react";
import { API } from "../config";
import { Link, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
const Confirm = () => {
  const params = useParams();
  const [value, setValue] = useState({
    error: '',
    success: false,
  });
  const { error, success } = value;
  useEffect(() => {
    const token = params.token;
    fetch(`${API}/confirmaiton/${token}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    
  .then(response => response.json())
  .then((data) => {
    if (data.error) return setValue({ ...value, error: data.error });
    else return setValue({ ...value, success: true });
  })
  .catch((error) => console.log(error));
  });
  const showError = () => {
    return (
      <div
        className="alert alert-danger"
        role="alert"
        style={{ display: error!=='' ? "" : "none" }}
      >
          {error}
      </div>
    );
  };
  const showSuccess = () => {
    return (
      <div
        className="alert alert-success"
        role="alert"
        style={{ display: success ? "" : "none" }}
      >
        you have success fully created your accournt now all you have to do is
        verify your user account by the link we send you to your email and happy
        shopping and thanks for choosing us
        <Link to='/' className='btn btn-success'> back to home </Link>
      </div>
    );
  };
  return (
    <>
      <NavBar />

      {showError()}
      {showSuccess()}
      
    </>
  );
};

export default Confirm;
