import * as moment from 'moment';
import { useEffect, useState } from 'react';
import style from './style.module.scss';

const CAL_API = 'AIzaSyBbeJA33TZOj0WfZtv9DNC9Yxe6MrjWbLQ';
const CAL_ID = 'eceday%40eng.ucsd.edu';
const BASEPARAMS = `orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`;
const BASEURL = `https://www.googleapis.com/calendar/v3/calendars/${CAL_ID}/events?${BASEPARAMS}`;
const finalURL = `${BASEURL}${`&maxResults=${30}`}&key=${CAL_API}`;

const Schedule = () => {
  const [eventsResponse, setEventsResponse] = useState([]);

  const getEvents = async () => {
    try {
      const response = await fetch(finalURL);
      const data = await response.json();
      setEventsResponse(data.items);
    } catch (e) {
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
      <h1 className={style.header}>Schedule</h1>
      <div className={style.schedule}>
        {eventsResponse &&
          eventsResponse.map(({ start, location, summary, description }) => {
            const startDate = new Date(start.dateTime);

            return (
              <div className={style.calendarEvent}>
                <span className={style.date}>
                  {moment(startDate).format('MMMM Do YYYY, h:mm a')}
                </span>
                <div className={style.titleLocationContainer}>
                  <span className={style.title}>{summary}</span>
                  <span className={style.location}>{location}</span>
                </div>
                <span className={style.description}>{description}</span>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Schedule;
