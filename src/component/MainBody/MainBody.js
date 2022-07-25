import React from "react";
import "./MainBody.css";

const MainBody = () => {
  return (
    <div>
      <div className="content-section p-3">
        <div className="card mx-3">
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
                    Bangladesh Cricket{" "}
                    <span className="head-title-date"> &nbsp;- 22 jun</span>
                  </h5>
                  <p className="post-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eos laudantium ipsam velit, magni asperiores consequuntur
                    fugiat vitae alias, excepturi quo numquam ipsum? Cumque
                    temporibus eius corrupti numquam a nostrum hic.
                  </p>
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

        <div className="card mx-3">
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
                    Bangladesh Cricket{" "}
                    <span className="head-title-date"> &nbsp;- 22 jun</span>
                  </h5>
                  <p className="post-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eos laudantium ipsam velit, magni asperiores consequuntur
                    fugiat vitae alias, excepturi quo numquam ipsum? Cumque
                    temporibus eius corrupti numquam a nostrum hic.
                  </p>
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
      </div>
    </div>
  );
};

export default MainBody;