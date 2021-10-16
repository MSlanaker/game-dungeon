import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://media-assets-03.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-140656-s3-news-tmp-140656-s3-news-tmp-37906-screenshot_2021-05-24_at_10.13.52-2x1-940-2x1-940--default--940.png"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">

            {/* <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link> */}

          </span>
        </div>
        <Link to ={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.blogtitle}</span>
        </Link>


        <hr />
        <span className="postDate">{new Date(post.dateCreated).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post.blogtext}
      </p>
    </div>
  );
}
