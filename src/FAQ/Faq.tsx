
import './Faq.css'

import img from '/Assigner Project/assigner-p/public/services/Faq-img.png'

const Faq = () => {
    return (
        <>

            <div className="faq">

                <h4>FAQs</h4>

            </div>

            <div className='faq-space'>

            <div className='faq-cont'>

                <p className='faq-cont-p'>What services are available on our website?</p>

                <img src={img} alt="" />

            </div>
            <div className='faq-cont'>

                <p className='faq-cont-p'>How can we guarantee the caliber of the assignments?</p>

                <img src={img} alt="" />

            </div>
            <div className='faq-cont'>

                <p className='faq-cont-p'>What distinguishes our company from other assignment writing firms?</p>

                <img src={img} alt="" />

            </div>
            <div className='faq-cont'>

                <p className='faq-cont-p'>Does utilizing our service have any limitations?</p>

                <img src={img} alt="" />

            </div>
            <div className='faq-cont'>

                <p className='faq-cont-p'>How can consumers access our website's news and updates?</p>

                <img src={img} alt="" />

            </div>

            </div>
        </>
    )
}

export default Faq