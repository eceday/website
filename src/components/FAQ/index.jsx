import { useState } from 'react';
import style from './style.module.scss';

export default function FAQ() {

  const questions = [
    {
      q: "What is ECE Day?", 
      a: "Good question",
    },
    {
      q: "Who can attend?", 
      a: "Anyone",
    },
    {
      q: "What should I bring?",
      a: "Yourself",
    },
    {
      q: "When is it?",
      a: "Next Thursday?",
    },
    {
      q: "Does it cost money?",
      a: "Nope",
    },
    {
      q: "Can I join remotely?",
      a: "No?",
    },
    {
      q: "How do I sign up?",
      a: "Just show up",
    },
    {
      q: "Where is it?",
      a: "Warren Bear",
    }
  ];
  
  const [showAns, setShowAns] = useState(new Array(questions.length).fill(false));

  function handleClick(ind){
    let newShowAns = new Array(questions.length).fill(false);
    if (showAns[ind] == false)
      newShowAns[ind] = true;
    setShowAns(newShowAns);
  }

  function createRow(ind){
    return (
      <div className={style.faqRow} key={ind}>
        <p className={style.faqText}>{questions[ind].q}</p>
        <img 
          src="faqPlus.svg" 
          alt="Expand FAQ" 
          className={style.faqPlus} 
          onClick={()=>handleClick(ind)}
          currentstate={showAns[ind] ? 1 : 0}
        />
        {showAns[ind] && 
          <p className={style.faqAns}>{questions[ind].a}</p>
        }
      </div>
    );
  }

  return (
  <section id="faq" className={style.container}>
    <div className={style.content}>
      <div className={style.header}>
        <h1 className={style.headerTxt}>Frequently Asked Questions</h1>
      </div>

      
      <div className={style.left}>
        {[0, 1, 2, 3].map(x=>createRow(x))}
      </div>

      <div className={style.center}>
        <img src="bulb.svg" alt="Light Bulb" className={style.lightbulbImage} />
      </div>

      <div className={style.right}>
        {[4, 5, 6, 7].map(x=>createRow(x))}
      </div>
    
    </div>  
  </section>);
}
