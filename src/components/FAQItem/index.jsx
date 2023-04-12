import { useState } from 'react';
import style from './style.module.scss';
const FAQItem = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.item} data-open={open ? 'open' : 'closed'}>
      <button onClick={() => setOpen(s => !s)}>
        <span>{title}</span>
        <img src="faqPlus.svg" alt="Expand FAQ" className={style.faqPlus} />
      </button>
      <p>{description}</p>
    </div>
  );
};

export default FAQItem;
