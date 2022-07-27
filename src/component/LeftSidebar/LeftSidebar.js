import React from "react";
import CreateTweetPost from "../TweetPost/CreateTweetPost";
import "./LeftSidebar.css";

const LeftSidebar = () => {
  return (
    <div>
      <div className="sidebar left-sidebar">
        <div className="d-flex align-items-center">
          <i class="fa-solid fa-house fa-2x"></i>
          <h4 className="mt-2 ms-3">Home</h4>
        </div>
        <div className="d-flex align-items-center mt-3">
          <i class="fa-solid fa-hashtag fa-2x"></i>
          <h4 className="mt-2 ms-3">Explore</h4>
        </div>
        <div className="d-flex align-items-center mt-3">
          <i class="fa-solid fa-bell fa-2x"></i>
          <h4 className="mt-2 ms-3">Notifications</h4>
        </div>
        <div className="d-flex align-items-center mt-3">
          <i class="fa-solid fa-message fa-2x"></i>
          <h4 className="mt-2 ms-3">Messages</h4>
        </div>
        <div className="d-flex align-items-center mt-3">
          <i class="fa-solid fa-bookmark fa-2x"></i>
          <h4 className="mt-2 ms-3">Bookmarks</h4>
        </div>
        <div className="d-flex align-items-center mt-3">
          <i class="fa-solid fa-user fa-2x"></i>
          <h4 className="mt-2 ms-3">Profile</h4>
        </div>
        <div className="d-flex align-items-center mt-3">
          <i class="fa-solid fa-ellipsis fa-2x"></i>
          <h4 className="mt-2 ms-3">More</h4>
        </div>

        <div className="mt-3">
          <button
            type="button"
            class="btn btn-primary btn-custom"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Tweet
          </button>

          {/* modal */}
          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    Create Your Tweet
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                {/* body */}
                <div class="modal-body">
                  <CreateTweetPost />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
