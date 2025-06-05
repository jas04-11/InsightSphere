import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import parse from "html-react-parser";

const SingleBlog = () => {
  const [data, setData] = useState(null);
  const [image, setImage] = useState("");
  let { blogId } = useParams();
  const api_base_url =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

  const getBlog = () => {
    fetch(`${api_base_url}/getBlog`, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        blogId: blogId,
        token: localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setData(data.blog);
          setImage(data.blog.image);
        } else {
          alert(data.msg);
        }
      });
  };

  const likeBlog = () => {
    fetch(`${api_base_url}/likeBlog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
        blogId: blogId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setData((prev) => ({ ...prev, likes: data.likes }));
        }
      });
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold">{data ? data.title : ""}</h1>
        <p>
          Created: {data ? new Date(data.date).toDateString() : ""}
        </p>
        <p>
          <strong>Views:</strong> {data?.views || 0} |{" "}
          <strong>Likes:</strong> {data?.likes || 0}
        </p>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">{data ? data.desc : ""}</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Link to="/">
              <button
                type="button"
                className="btn btnNormal btn-lg px-4 me-sm-3"
              >
                Go Back
              </button>
            </Link>
            <button onClick={likeBlog} className="btn btnNormal btn-lg px-4">
              ❤️ Like ({data?.likes || 0})
            </button>
          </div>
        </div>
        <div style={{ maxHeight: "30vh" }}>
          <div className="container px-5">
            <img
              src={`${api_base_url}/uploads/${image}`}
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example image"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div>{data ? parse(data.content) : ""}</div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;

