import style from './style.module.scss';

const Navbar = () => (
  <nav className={style.navbar}>
    <ul className={style.navItems}>
      <li className={`${style.navItem} ${style.navTitle}`}>
        <a href="#">ECE Day</a>
      </li>
      <li className={style.navItem}>
        <a href="#about">About</a>
      </li>
      <li className={style.navItem}>
        <a href="#schedule">Schedule</a>
      </li>
      <li className={style.navItem}>
        <a href="#faq">FAQ</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
