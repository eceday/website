import style from './style.module.scss';

const Schedule = () => (
  <section id="schedule" className={style.container}>
    <div className={style.fallenStar}>
      <img className={style.starImage} src="Fallen_Star.svg" />
    </div>
    <div className={style.header}>Schedule</div>
    <div className={style.calendarEvent}></div>
  </section>
);

export default Schedule;
