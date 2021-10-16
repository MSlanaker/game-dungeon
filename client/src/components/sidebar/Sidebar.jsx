import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">THE GAME DUNGEON</span>
        <img
          src="https://cdn.shopify.com/s/files/1/0345/0237/7603/products/image_2cd4d7b8-c77f-4b90-855a-aa014c32ffcd_1024x1024.jpg?v=1613728226"
          alt=""
        />
        <p>
          We built this space in order for you, the gamer, to talk about the titles and environments you think are worthy of discussing.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">C 2021</span>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">C 2021</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div> */}
    </div>
  );
}
