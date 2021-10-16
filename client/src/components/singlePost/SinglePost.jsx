import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})

  useEffect(() => {
      const getPost = async () => {
      const res = await axios.get("/blogs/" + path)
      setPost(res.data)
    };
    getPost()
  },[path])
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://media-assets-03.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-140656-s3-news-tmp-140656-s3-news-tmp-37906-screenshot_2021-05-24_at_10.13.52-2x1-940-2x1-940--default--940.png"
          alt=""
        />
        <h1 className="singlePostTitle">
          {post.blogtitle}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            
              <Link className="link" to={`/?user=${post.username}`}>
              <b className="singlePostAuthor">{post.username}</b>
              </Link>
            
          </span>
          <span>{new Date (post.dateCreated).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
         {post.blogtext}
        </p>
      </div>
    </div>
  );
}
