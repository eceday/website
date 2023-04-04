import style from './style.module.scss';

const About = () => (
  <section className={style.container}>
    <div className={style.content}>
      <div className={style.aboutLeft}>
        <img src="landing_hero.svg" alt="Placeholder" className={style.aboutImg} />
      </div>
      <div className={style.aboutRight}>
        <h1>Join Us At ECE Day 2023</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
          hendrerit urna. Pellentesque sit amet sapien. Aliquam in hendrerit urna. Pellentesque sit
          amet sapien. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
        </p>
      </div>
    </div>
  </section>
);

export default About;
