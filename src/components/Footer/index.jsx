import style from './style.module.scss';

const Footer = () => (
  <section id="footer" className={style.container}>
    <div className={style.content}>
      <span className={style.leftText}>
        This event is brought to you by our incredible community of engineering student
        organizations and our affiliated sponsors
      </span>
      <div className={style.logosRow}>
        <a href="https://acmucsd.com">
          <img src="ACM_Logo.png" alt="ACM at UC San Diego" />
        </a>

        <a href="https://as.ucsd.edu">
          <img src="AS_Logo.svg" alt="Associated Students at UC San Diego" />
        </a>

        <a href="https://ece.ucsd.edu">
          <img src="ece_logo.svg" alt="Electrical and Computer Engineering Department" />
        </a>

        <a href="https://eceusc.ucsd.edu/">
          <div className={style.largeLogo}>
            <img src="ECE_USC_Logo.svg" alt="ECE USC at UC San Diego" />
          </div>
        </a>

        <a href="https://hkn.ucsd.edu/">
          <img src="HKN_Logo.svg" alt="HKN at UC San Diego" />
        </a>

        <a href="https://ieeeucsd.org/">
          <div className={style.largeLogo}>
            <img src="IEEE_Logo.svg" alt="IEEE at UC San Diego" />
          </div>
        </a>

        <a href="https://pib.ucsd.edu/">
          <img src="PIB_Logo.svg" alt="PiB at UC San Diego" />
        </a>
      </div>
      <span className={style.centerText}>Made with ❤️ by ACM, HKN, and PiB</span>
    </div>
  </section>
);

export default Footer;
