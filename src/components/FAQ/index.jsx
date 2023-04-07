import style from './style.module.scss';

const FAQ = () => (
  <section id="faq" className={style.container}>
    <div className={style.content}>
      <div className={style.header}>
        <h1 className={style.headerTxt}>Frequently Asked Questions</h1>
      </div>

      
      <div className={style.left}>
        <div className={style.faqRow}>
          <p className={style.faqText}>What is ECE Day?</p>
          <img src="faqPlus.svg" alt="Expand FAQ" className={style.faqPlus} />
        </div>
        <div className={style.faqRow}>
          <p className={style.faqText}>Who can attend?</p>
          <img src="faqPlus.svg" alt="Expand FAQ" className={style.faqPlus} />
        </div>
        <div className={style.faqRow}>
          <p className={style.faqText}>What should I bring?</p>
          <img src="faqPlus.svg" alt="Expand FAQ" className={style.faqPlus} />
        </div>
      </div>

      <div className={style.center}>
        <img src="bulb.svg" alt="Light Bulb" className={style.lightbulbImage} />
      </div>

      <div className={style.right}>
      <div className={style.faqRow}>
          <p className={style.faqText}>What is ECE Day?</p>
          <img src="faqPlus.svg" alt="Expand FAQ" className={style.faqPlus} />
        </div>
        <div className={style.faqRow}>
          <p className={style.faqText}>Who can attend?</p>
          <img src="faqPlus.svg" alt="Expand FAQ" className={style.faqPlus} />
        </div>
        <div className={style.faqRow}>
          <p className={style.faqText}>What should I bring?</p>
          <img src="faqPlus.svg" alt="Expand FAQ" className={style.faqPlus} />
        </div>
      </div>
    
    </div>  
  </section>
);

export default FAQ;
