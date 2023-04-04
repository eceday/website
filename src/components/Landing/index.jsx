import style from './style.module.scss';

const Landing = () => (
  <section className={style.container}>
    <div className={style.content}>
      <div className={style.landingLeft}>
        <img src="landingTitle.svg" alt="ECE Title" className={style.title} />
        <img src="ece_logo.svg" alt="Jacobs School of Engineering" className={style.jsoe} />
      </div>
      <div className={style.landingRight}>
        <img src="landing_hero.svg" alt="Bear thing" className={style.bear} />
      </div>
    </div>
  </section>
);

export default Landing;
