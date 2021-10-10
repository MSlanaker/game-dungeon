import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://image.shutterstock.com/image-vector/confused-emoji-face-flat-style-260nw-1649247319.jpg" alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum dignissimos eos culpa! 
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Games</li>
                    <li className="sidebarListItem">Platforms</li>
                    <li className="sidebarListItem">Esports</li>
                    <li className="sidebarListItem">Hacks</li>
                    <li className="sidebarListItem">Training</li>
                </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
            </div>
        </div>
    )
}
