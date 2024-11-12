



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'



import './Faq.css'



const Faq = () => {
    return (
        <>

            <div className="faq">

                <h4>FAQs</h4>

            </div>

            <div className='faq-space'>

            <div className='faq-cont'>

                <p className='faq-cont-p'>What services are available on our website?</p>

              

                
                <FontAwesomeIcon icon={faAngleDown} />
               

            </div>
            <div className='faq-cont'>

                <p className='faq-cont-p'>How can we guarantee the caliber of the assignments?</p>

                <FontAwesomeIcon icon={faAngleDown} />

            </div>
            <div className='faq-cont'>

                <p className='faq-cont-p'>What distinguishes our company from other assignment writing firms?</p>

                <FontAwesomeIcon icon={faAngleDown} />

            </div>
            <div className='faq-cont'>

                <p className='faq-cont-p'>Does utilizing our service have any limitations?</p>

                <FontAwesomeIcon icon={faAngleDown} />

            </div>
            <div className='faq-cont'>

                <p className='faq-cont-p'>How can consumers access our website's news and updates?</p>

                <FontAwesomeIcon icon={faAngleDown} />

            </div>

            </div>
        </>
    )
}

export default Faq