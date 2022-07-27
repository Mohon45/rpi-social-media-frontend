import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";
import Loader from "../../../shared/Loader/Loader";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { loginUser, isLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {
    const { email, password } = data;
    loginUser(email, password);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className="card sign-in-box mx-auto mt-5"
          style={{ width: "35rem", height: "80vh" }}
        >
          <div className="card-body">
            <h2 className="text-center fw-bold">Login CMT 19-20</h2>
            <div className="w-75 mx-auto mt-5">
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label fw-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email")}
                    placeholder="enter your email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label fw-bold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    {...register("password")}
                    placeholder="enter your password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <Link style={{ textDecoration: "none" }} to="/registration">
                  New User? Please Register
                </Link>
                <div className="mb-3 text-center mt-5">
                  <button type="submit" className="btn btn-primary btn-lg px-5">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
