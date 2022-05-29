import { ReactComponent as FileSvg } from "./file.svg";
import "./Layout.sass";

const Layout = ({ children }) => {
  return (
    <main className="main">
      <header className="header">
        <h1 className="header__logo">brAun</h1>
        <section className="header__right">
          <nav className="header__nav">
            <ul className="header__nav-links">
              <li>
                <a className="header__nav-link" href="/">
                  Products
                </a>
              </li>
              <li>
                <a className="header__nav-link" href="/">
                  Offers
                </a>
              </li>
              <li>
                <a className="header__nav-link" href="/">
                  Services
                </a>
              </li>
            </ul>
            <input
              className="header__nav-search"
              type="text"
              placeholder="How can we help"
            />
            {/* <div className="header__nav-icon">icon</div> */}
            <FileSvg />
          </nav>
        </section>
      </header>
      {children}
      <footer className="footer">
        <section>
          <h2>brAun</h2>
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </section>
      </footer>
    </main>
  );
};

export default Layout;
