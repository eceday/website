import FAQItem from 'components/FAQItem';
import style from './style.module.scss';

const questions = [
  {
    q: 'What is ECE Day?',
    a: 'ECE Day is a celebration of the students and faculty members of the ECE Department at UCSD. We’ll be having a surprise faculty speaker, tabling events, workshops, and socials for you to attend. Students that attend events will earn raffle tickets, which can go towards winning our prizes, which include speakers, keyboards, and a Nintendo Switch! We look forward to seeing you there!',
  },
  {
    q: 'Who can attend?',
    a: 'Anyone can attend! We welcome students of all ages, majors, and skill levels.',
  },
  {
    q: 'What should I bring?',
    a: 'Just your enthusiasm and willingness to learn! We hope you gain something from attending :)',
  },
  {
    q: 'When is it?',
    a: 'ECE Day 2023 will be on April 14, 2023. We will be hosting a variety of events on Warren Mall and in Jacob’s Hall. Be sure to check our calendar to see which event is being held where!',
  },
  {
    q: 'Does it cost money?',
    a: 'Nope! ECE Day is completely free.',
  },
  {
    q: 'Can I join remotely?',
    a: 'If you require any accommodations to participate in ECE Day, please email us at eceday@eng.ucsd.edu. We will do our best to accommodate your needs.',
  },
  {
    q: 'How do I sign up?',
    a: 'No signups are required! We will be having you sign into each event you attend.',
  },
  {
    q: 'Where is it?',
    a: 'Our events will take place in Warren Mall and various rooms in Jacob’s Hall (the building with the Fallen Star).',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className={style.container}>
      <div className={style.content}>
        <h1 className={style.header}>Frequently Asked Questions</h1>
        <div className={`${style.left} ${style.faq}`}>
          <FAQItem
            title="What is ECE Day?"
            description="ECE Day is an annual celebration of the students and faculty members of the ECE Department at UCSD!"
          />
          <FAQItem
            title="When is ECE Day?"
            description="ECE Day 2023 will be on April 14, 2023. Be sure to check our calendar to stay updated!"
          />
          <FAQItem
            title="How do I sign up?"
            description="No signups are required! We will be having you sign into each event you attend."
          />
          <FAQItem title="Does it cost money?" description="Nope! ECE Day is completely free." />
        </div>
        <div className={style.center}>
          <img src="bulb.png" alt="Light Bulb" className={style.lightbulbImage} />
        </div>
        <div className={`${style.right} ${style.faq}`}>
          <FAQItem
            title="Who can attend?"
            description="Anyone can attend! We welcome students of all ages, majors, and skill levels."
          />
          <FAQItem
            title="Where is it taking place?"
            description="Our events will take place in Warren Mall and various rooms in Jacob’s Hall (the building with the Fallen Star)."
          />
          <FAQItem
            title="What should I bring?"
            description="Just your enthusiasm and willingness to learn! We hope you gain something from attending :)"
          />
          <FAQItem
            title="What if I need accomodations?"
            description="If you require any accommodations to participate in ECE Day, please email us at eceday@eng.ucsd.edu."
          />
        </div>
      </div>
    </section>
  );
}
