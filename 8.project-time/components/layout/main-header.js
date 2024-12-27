import Link from 'next/link';

import clasess from './main-header.module.css';

function MainHeader(props) {
  return (
    <header className={clasess.header}>
      <div className={clasess.logo}>
        <Link href={'/'}>NextEvents</Link>
      </div>
      <nav className={clasess.navigation}>
        <ul>
          <li>
            <Link href={'/events'}>Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
