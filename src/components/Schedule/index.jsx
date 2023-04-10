import { useEffect, useState } from 'react';
import style from './style.module.scss';

const Schedule = () => {
  const CAL_API = 'AIzaSyBbeJA33TZOj0WfZtv9DNC9Yxe6MrjWbLQ';
  const CAL_ID = 'eceday%40eng.ucsd.edu';
  const BASEPARAMS = `orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`;
  const BASEURL = `https://www.googleapis.com/calendar/v3/calendars/${CAL_ID}/events?${BASEPARAMS}`;

  const test = [0, 1, 2];
  const [eventsResponse, setEventsResponse] = useState([]);

  const getEvents = async () => {
    const finalURL = `${BASEURL}${`&maxResults=${30}`}&key=${CAL_API}`;
    try {
      const response = await (typeof window !== 'undefined' ? fetch(finalURL) : null);
      const responseJSON = await response.json();
      setEventsResponse(responseJSON.items);
    } catch (e) {
      alert(e);
      setEventsResponse([]);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <section id="schedule" className={style.container}>
      <div className={style.fallenStar}>
        <img className={style.starImage} src="Fallen_Star.svg" />
      </div>
      <div className={style.header}>Schedule</div>
      {eventsResponse &&
        eventsResponse.map(element => {
          return (
            <div className={style.calendarEvent}>
              {new Date(element.start.dateTime).toDateString()}
            </div>
          );
        })}
    </section>
  );
};

export default Schedule;
