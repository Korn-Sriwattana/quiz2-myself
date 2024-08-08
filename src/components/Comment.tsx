"use client";

export default function Comment({
  userImagePath: any,
  username: any,
  commentText: any,
  likeNum: any,
  replies: any,
}) {
  return (
    <div className="d-flex gap-2 my-2">
          <img
            src = "userImagePath"
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
              Lisa
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>{commentText}</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>{likeNum}</span>
            </div>
          </div>
        </div>
  );
}
