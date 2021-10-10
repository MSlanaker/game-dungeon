import "./post.css";

export default function Post() {
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
            <span className="postTitle">Lorem ipsum dolor sit amet.</span>
            <hr/>
            <span className="postDate">1 Hour Ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur beatae laborum magnam! Mollitia ullam fugit reprehenderit consectetur iste, laudantium incidunt eligendi amet natus voluptatum? Eaque esse officiis consequatur quidem tenetur.</p>
        </div>
    )
}
