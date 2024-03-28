import style from './style.module.scss';

const About = () => (
  <section className={style.container} id="about">
    <div className={style.content}>
      <div className={style.aboutLeft}>
        <img src="about.png" alt="About Image" className={style.aboutImg} />
      </div>
      <div className={style.aboutRight}>
        <h1>Join Us At ECE Day 2024</h1>
        <p>
          ECE Day is a celebration of the students and faculty members of the ECE Department at
          UCSD. We’ll be having a surprise faculty speaker, tabling events, workshops, and socials
          for you to attend. Students that attend events will earn raffle tickets, which can go
          towards winning our prizes! We look forward to seeing you there!
        </p>
      </div>
    </div>
  </section>
);

export default About;
