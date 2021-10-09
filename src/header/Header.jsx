import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Game Dungeon</span>
        <span className="headerTitleLg">Discuss your gaming.</span>
      </div>
      <img className="headerImg" src="https://cdnb.artstation.com/p/assets/images/images/018/622/083/large/josh-benson-beautypass-001.jpg?1560093040" alt="" />
    </div>
  );
}
