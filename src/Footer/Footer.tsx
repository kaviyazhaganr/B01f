
import './Footer.css'
import insta from '/Assigner Project/assigner-p/public/insta.png'
import img2 from '/Assigner Project/assigner-p/public/Img (2).png'
import img3 from '/Assigner Project/assigner-p/public/Img (3).png'
import img4 from '/Assigner Project/assigner-p/public/Img (4).png'
import img5 from '/Assigner Project/assigner-p/public/Img (5).png'
import img6 from '/Assigner Project/assigner-p/public/Img (6).png'




const Footer = () => {
    return (
        <>

            <div className="footer">


                <div className="footer-flex-1">



                    <div className="footer-cont-1">

                        <h4 className='footer-cont-1-h'>Quick Links</h4>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>FAQ</p>
                        <p>Contact Us</p>
                        <p>How We Help</p>
                        <p>Community</p>
                    </div>
                    <div className="footer-cont-2">

                        <h4>Features</h4>
                        <p>Plagiarism Cheeker</p>
                        <p>Free Publication</p>
                        <p>Provide Books</p>
                        <p>Provide FAQ</p>
                        <p>Paraphtaser</p>

                    </div>

                    <div className="footer-cont-3">
                        <h4>Our Offering</h4>
                        <p>Free IELTS Maserclass</p>
                        <p>Talk to counsellor</p>
                        <p>IELTS Exam Overview</p>
                        <p>Important IELTS Articles</p>
                    </div>

                </div>

                <div className="footer-flex-2">

                    <div className='footer-flex-2-cont'>
                        <h4>Newsletter</h4>
                        <p>You can gtrust us.We only send promo offer</p>

                        <div className='anchor-flex'>
                            <a href="" className='footer-flex-2-a-1'>Your email here</a>
                            <a href="" className='footer-flex-2-a-2'>Subscribe</a>
                        </div>
                             
                             <div className="div">
                        <img src={insta} className='icon-1-f-f' alt="" />
                        <img src={img2} className='icon-1-f' alt="" />
                        <img src={img3} className='icon-1-f' alt="" />
                        <img src={img4} className='icon-1-f' alt="" />
                        <img src={img5} className='icon-1-f' alt="" />
                        <img src={img6} className='icon-1-f' alt="" />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer