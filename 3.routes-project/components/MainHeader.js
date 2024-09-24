import NavLink from './NavLink';

const MainHeader = () => {
  return (
    <header id="main-header">
      <div id="logo">
        <NavLink href="/">Next News</NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/arcive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
