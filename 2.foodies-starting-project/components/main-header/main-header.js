import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import classes from '@/components/main-header/main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

const mainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="Its image header" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink url={'/meals'}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink url={'/community'}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default mainHeader;
