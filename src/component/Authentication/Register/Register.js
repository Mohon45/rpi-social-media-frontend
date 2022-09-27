import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Loader from "../../../shared/Loader/Loader";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const { registerUser, isLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {
    const { name, email, password, password2 } = data;
    if (password !== password2) {
      toast.error("Password not Match!");
      return;
    }
    registerUser(email, password, name);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className="card sign-in-box mx-auto mt-2"
          style={{ width: "35rem", height: "85vh" }}
        >
          <div className="card-body">
            <h2 className="text-center fw-bold">Registration CMT 19-20</h2>
            <div className="w-75 mx-auto mt-5">
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputName"
                    className="form-label fw-bold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("name")}
                    placeholder="enter your name"
                    className="form-control"
                    id="exampleInputName"
                  />
                </div>
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
                    placeholder="enter your email id"
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
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword2"
                    className="form-label fw-bold"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="password2"
                    {...register("password2")}
                    placeholder="confirm your password"
                    className="form-control"
                    id="exampleInputPassword2"
                  />
                </div>
                <Link style={{ textDecoration: "none" }} to="/login">
                  Already Registered? Please Login
                </Link>
                <div className="mb-3 text-center mt-5">
                  <button type="submit" className="btn btn-primary btn-lg px-5">
                    Register
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

export default Register;
