import fetch from 'node-fetch';
import style from './style.module.scss';

const CAL_API = 'AIzaSyBbeJA33TZOj0WfZtv9DNC9Yxe6MrjWbLQ';
const CAL_ID = 'eceday%40eng.ucsd.edu';
const BASEPARAMS = `orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`;
const BASEURL = `https://www.googleapis.com/calendar/v3/calendars/${CAL_ID}/events?${BASEPARAMS}`;

const getEvents = async () => {
  const finalURL = `${BASEURL}${`&maxResults=${30}`}&key=${CAL_API}`;
  try {
    return (await fetch(finalURL)).json();
  } catch (e) {
    console.error(e);
    return {};
  }
};

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
