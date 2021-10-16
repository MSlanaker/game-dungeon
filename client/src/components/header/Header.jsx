import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Gamer talk. For gamers, by gamers.</span>
        <span className="headerTitleLg">Game Dungeon</span>
      </div>
      <img
        className="headerImg"
        src="https://acloserlisten.files.wordpress.com/2020/01/games-banner-1140x400-1.png"
        alt=""
      />
    </div>
  );
}
