import "./post.css";

export default function Post({post}) {
    return (
        <div className="post">
            <img 
            className="postImg"
            src="https://i.imgur.com/PJgeLiQ.jpg"
            alt="" 
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Gaming</span>
                <span className="postCat">Platforms</span>
            </div>
            <span className="postTitle">{post.blogtitle}</span>
            <hr/>
            <span className="postDate">{new Date(post.dateCreated).toDateString()}</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur beatae laborum magnam! Mollitia ullam fugit reprehenderit consectetur iste, laudantium incidunt eligendi amet natus voluptatum? Eaque esse officiis consequatur quidem tenetur.</p>
        </div>
    )
}
