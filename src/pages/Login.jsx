import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { postLogin } from "../services/apiService";
import { setToken } from "../services/localStorageService";
import { useSelector, useDispatch } from "react-redux";
import { doLogin } from "../redux/action";

const Login = () => {
  const isAuthenticated = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleBtnLogin = async () => {
    if (!username) {
      toast.error("Please enter a username.");
      return;
    }

    if (!password) {
      toast.error("Please enter a password.");
      return;
    }

    try {
      const response = await postLogin(username, password);
      const loginResponse = response.data;
      if (loginResponse.code === 0) {
        const { token } = loginResponse.result;
        setToken(token);
        dispatch(doLogin())
        navigate('/');
        toast.success('Login successfull!')
      } else {
        const failMessage = loginResponse.message;
        toast.error(failMessage);
      }
    } catch (error) {
      if (error.response) {
        const errorData = error.response.data;
        const failMessage = errorData.message;
        toast.error(failMessage);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };



  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">

            <div className="my-3">
              <label htmlFor="display-4">Username</label>
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="my-3">
              <label htmlFor="floatingPassword display-4">Password</label>
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="my-3">
              <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link></p>
            </div>
            <div className="text-center">
              <button
                className="my-2 mx-auto btn btn-dark"
                onClick={() => { handleBtnLogin() }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
