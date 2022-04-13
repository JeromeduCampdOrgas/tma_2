import logo from "../../images/logo/logo-hypeddit.png";

function Header() {
  return (
    <section id="header">
      <div id="logo">
        <img src={logo} alt="" />
      </div>
      <div id="navigation">
        <ul>
          <li>Top 100 Downloads</li>
          <li>How it Works</li>
          <li>Free Tools</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Support</li>
          <li id="login">Login</li>
        </ul>
      </div>
    </section>
  );
}
export default Header;
