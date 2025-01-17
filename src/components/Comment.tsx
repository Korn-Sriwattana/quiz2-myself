"use client";

export default function Comment({
  userImagePath ,
  username ,
  commentText ,
  likeNum ,
  replies ,
}) {
  return (
    <div className="d-flex gap-2 my-2">
          <img
            src = "/profileImages/lisa.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
            Comment.username
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>.</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>.</span>
            </div>
          </div>
        </div>
  );
}
