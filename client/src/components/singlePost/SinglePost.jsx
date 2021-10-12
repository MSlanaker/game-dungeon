import "./singlePost.css";

export default function SinglePost() {
    return (
        <div classname="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span>
                        Author:
                        <b className="singlePostAuthor">
                            <Link className="link" to="/posts>username=Jimmy">
                                Jimmy
                            </Link>
                        </b>
                    </span>
                    <span>1 Day Ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores tempora modi reiciendis porro, dolore earum nemo consequatur tempore facilis ea facere doloremque cumque ad quaerat! Perspiciatis repudiandae vel corrupti porro.
                </p>
            </div>
        </div>
    );
}
