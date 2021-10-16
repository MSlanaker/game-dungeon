import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from "axios";
// import { useLocation } from "react-router";


export default function Home() {
  const [posts, setPosts] = useState([]);
  // const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      // TEMP GET ROUTE localhost:5001/api/blogs   USE 'BLOGS' NOT 'POSTS' IN ROUTES
      const res = await axios.get("/blogs");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
