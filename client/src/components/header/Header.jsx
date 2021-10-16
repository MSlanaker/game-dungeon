import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Talk that gamer talk...</span>
        <span className="headerTitleLg">Game Dungeon</span>
      </div>
      <img
        className="headerImg"
        // src="https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/6/AmazonStores/ATVPDKIKX0DER/c56e1e493747e1bee78f78206aee8720.w1200.h400.png"
        src="https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/best-dungeon-crawler-games1592591617374955.jpg"
        alt=""
      />
    </div>
  );
}
