import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./CreateTweetPost.css";
import Loader from "../../shared/Loader/Loader";

const CreateTweetPost = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {
    setLoading(true);
    let formData = new FormData();
    formData.append("description", data.description);
    // formData.append("avatar", data.image);
    formData.append("name", user.displayName);

    axios
      .post("https://rpi-social-media.onrender.com/api/new-post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        toast.success("Tweet successfully Post!");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        toast.error("Something Went Wrong! Tweet can not post. Try to Latter!");
        setLoading(false);
      });
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="mb-3">
            <textarea
              type="text"
              {...register("description")}
              placeholder="What's happening?"
              className="form-control"
              rows="5"
            ></textarea>
          </div>
          {/* <div className="mb-3">
            <label
              htmlFor="exampleInputFile"
              className="form-label fw-bold lebel-file"
            >
              <i class="fa-solid fa-image fa-2x"></i>
            </label>
            <input
              type="file"
              {...register("avatar")}
              className="form-control"
              id="exampleInputFile"
              accept="image/*"
            />
          </div> */}
          <div className="mb-3 text-center mt-2">
            <button
              type="submit"
              data-bs-dismiss="modal"
              className="btn btn-primary btn-lg px-5"
            >
              Tweet
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default CreateTweetPost;
