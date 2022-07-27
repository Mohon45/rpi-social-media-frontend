import React, { useEffect, useState } from "react";
import axios from "axios";
import Moment from "react-moment";
import "./MainBody.css";
import PostLoader from "../../shared/PostLoader/PostLoader";

const MainBody = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/all-post")
      .then((res) => {
        if (res.status === 200) {
          setRows(res.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <PostLoader />
      ) : (
        <div className="content-section p-3">
          {rows.map((item, index) => (
            <div className="card mx-3" key={index}>
              <div className="card-body">
                <div className="d-flex">
                  <div className="head-img">
                    <img
                      src="https://i.ibb.co/gJcC8Zz/No-image-available.webp"
                      alt=""
                    />
                  </div>
                  <div className="ms-2 mt-2">
                    <div>
                      <h5 className="fw-bold">
                        {item.name}
                        <span className="head-title-date">
                          {" "}
                          &nbsp;-{" "}
                          <Moment format="D MMM" withTitle>
                            {item.postDate}
                          </Moment>
                        </span>
                      </h5>
                      <p className="post-description">{item.description}</p>
                    </div>
                    <div className="post-img">
                      <img
                        src="https://pbs.twimg.com/media/FYGxl3maAAUAnOn?format=jpg&name=small"
                        alt=""
                      />
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                      <div className="d-flex align-items-center ms-2">
                        <i class="fa-solid fa-heart"></i>
                        <p className="m-0 ms-2">34</p>
                      </div>

                      <div className="d-flex align-items-center">
                        <i class="fa-solid fa-comment"></i>
                        <p className="m-0 ms-2">34</p>
                      </div>

                      <div className="d-flex align-items-center">
                        <i class="fa-solid fa-retweet"></i>
                        <p className="m-0 ms-2">34</p>
                      </div>

                      <div className="d-flex align-items-center me-2">
                        <i class="fa-solid fa-share"></i>
                        <p className="m-0 ms-2">34</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainBody;
