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
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      q: "When is it?",
      a: "Next Thursday?",
    },
    {
      q: "Does it cost money?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          <div className={style.faqAns}>{questions[ind].a}</div>
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

      
      <div className={`${style.faqs} ${style.faqsLeft}`}>
        {[0, 1, 2, 3].map(x=>createRow(x))}
      </div>

      <div className={style.center}>
        <img src="bulb.svg" alt="Light Bulb" className={style.lightbulbImage} />
      </div>

      <div className={`${style.faqs} ${style.faqsRight}`} >
        {[4, 5, 6, 7].map(x=>createRow(x))}
      </div>
    
    </div>  
  </section>);
}
