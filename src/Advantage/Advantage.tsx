import './Advantage.css'

import img from '/Assigner Project/assigner-p/public/services/OBJECTS -ad.png'
import img1 from '/Assigner Project/assigner-p/public/services/OBJECTS (2)-ad.png'

const Advantage = () => {
    return (
        <>

            <div className="advantage">

                <h4 className="ad-h1">Our Assistance's advantages</h4>
                <p className='ad-p'>The Assigner wants to build a strong foundation that will enable students to soar to achievement.</p>

                <div className="ad-img1">

                    <img src={img} alt="" />


                </div>

            </div >


            <div className='ad-cont'>

                <div className='ad-cont-1'>

                    <h4>No Plagiarism</h4>
                    <p className='ad-cont-1-p'>100% original answers that lessen the possibility of receiving a bad grade.</p>

                </div>

                <div className='ad-cont-1'>

                    <h4>On-time Submission</h4>
                    <p className='ad-cont-1-p'>We promise to turn in the job ahead of schedule, no matter how difficult it is.</p>

                </div>

                <div className='ad-cont-1'>

                    <h4>24/7 support</h4>
                    <p className='ad-cont-1-p'>Help for homework is available 24/7; we are always here to assist students with their assignments.</p>

                </div>

                <div className='ad-cont-1'>

                    <h4>Rewrites that satisfy</h4>
                    <p className='ad-cont-1-p'>Get your schoolwork redone as many times as you like till you are happy.</p>

                </div>

                <div className="ad-img2">
                    <img src={img1} alt="" />
                </div>

            </div>



        </>



    )
}

export default Advantage