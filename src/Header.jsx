import GithubLogo from "./assets/Github.png";
function Header() {
  return (
    <header>
      Entertainment.Search
      <a href="">
        <img src={GithubLogo} alt="" />
      </a>
    </header>
  );
}
export default Header;
