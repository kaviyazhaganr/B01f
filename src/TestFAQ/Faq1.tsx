

import { useState } from 'react'
import './Faq1.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

interface FaqData {
  id: number;
  question: string;
  answer: string;
}

interface FaqitemProps {
  question: string;
  answer: string;
}

const Faqitem = ( {question, answer}: FaqitemProps) => {
    const [isOpen, setIsOpen] = useState(false)
  
    const toggleOpen = () => {
      setIsOpen(!isOpen)
    }
  
    return (
  
      <div className={`faq-item ${isOpen ? 'active' : ''}`}>
        <div className='faq-item-header-container'>
          <div className="faq-item-header" >
          {/* What services are available on our website? */}
            {question}
          </div>
          <div className="faq-item-icon" onClick={toggleOpen}>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
  
        </div>
  
        <div className="faq-item-body">
          <div className="faq-item-body-content">
            {/* React is a JavaScript-based UI development library. Although React is a library rather than a language,
            it is widely used in web development.
            The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development. */}
            {answer}
          </div>
  
  
        </div>
  
      </div>
    )
  }
  const FAQ = ({data}: { data: FaqData[] }) => {
  
    return (
  
      <div className="faq-test">
        <h1>FAQs</h1>
        {/* <Faqitem />
        <Faqitem />
        <Faqitem />
        <Faqitem />
        <Faqitem /> */}
  
        {
          data.map((item) => (
          <Faqitem key={item.id} question={item.question} answer={item.answer} />))}
  
      </div>
    )
  }
  
  const data = [
  
    {
      id:1,question:"What services are available on our website?",answer:"React is a JavaScript-based UI development library. Although React is a library rather than a language,it is widely used in web development.The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development."
    },
    {
      id:2,question:"How can we guarantee the caliber of the assignments?",answer:"React is a JavaScript-based UI development library. Although React is a library rather than a language,it is widely used in web development.The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development."
    },
    {
      id:3,question:"What distinguishes our company from other assignment writing firms?",answer:"React is a JavaScript-based UI development library. Although React is a library rather than a language,it is widely used in web development.The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development."
    },
    {
      id:4,question:"Does utilizing our service have any limitations?",answer:"React is a JavaScript-based UI development library. Although React is a library rather than a language,it is widely used in web development.The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development."
    },
    {
      id:5,question:"How can consumers access our website's news and updates?",answer:"React is a JavaScript-based UI development library. Although React is a library rather than a language,it is widely used in web development.The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development."
    }
  ]

const Test = () => {
  return (
    <>

    <div className="test"></div>
    <FAQ  data={data}/>


  </>
  )
}

export default Test