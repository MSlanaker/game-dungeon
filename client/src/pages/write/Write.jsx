import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

import "./write.css";

export default function Write() {
  const [blogtitle, setBlogTitle] = useState("")
  const [blogtext, setBlogText] = useState("")
  const { user } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username:user.username,
      blogtitle,
      blogtext,
    };
    try {
      const res = await axios.post("/blogs", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

    
  
  return (
    <div className="write">
      
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange = {e => setBlogTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange = {e => setBlogText(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
