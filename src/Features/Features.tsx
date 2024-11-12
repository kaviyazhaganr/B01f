import './Features.css'

// import image from '/Assigner Project/assigner-p/public/Container.png'
import img1 from '/Assigner Project/assigner-p/public/3146064.png.png'
import img2 from '/Assigner Project/assigner-p/public/2232688.png.png'
import img3 from '/Assigner Project/assigner-p/public/2658986.png.png'
import img4 from '/Assigner Project/assigner-p/public/15869380.png.png'


const Features = () => {
  return (
    <>
    <div className="features">

        <h4 className="f-h1">Awesome Features</h4>
        <p className='f-p'>Get ready to unlock the next level of features</p>
    </div>

    <div className='f-cont'>
        
      <div className='f-cont-1'>
          <img src={img1} alt=""  className='f-count-1-img'/>
          <h4>Plagiarism Checker</h4>
          <p className='f-count-1-p'>We will provide access to assignments free of plagiarism</p>

      </div>

      <div className='f-cont-1'>
          <img src={img2} alt=""  className='f-count-1-img'/>
          <h4>Free Publications</h4>
          <p className='f-count-1-p'>We will provide access to publication</p>

      </div>

      <div className='f-cont-1'>
          <img src={img3} alt=""  className='f-count-1-img'/>
          <h4>Provides Free Books and PDF</h4>
          <p className='f-count-1-p'>Free Books and PDF will be provided</p>

      </div>

      <div className='f-cont-1'>
          <img src={img4} alt=""  className='f-count-1-img'/>
          <h4>Paraphraser</h4>
          <p className='f-count-1-p'>A paraphraser will be provided</p>

      </div>

    </div>
    
    </>
  )
}

export default Features