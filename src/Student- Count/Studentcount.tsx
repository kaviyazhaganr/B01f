import "./StudentCount.css"
// import image from '/Assigner Project/assigner-p/public/Item.png'
// import image1 from '/Assigner Project/assigner-p/public/Item (1).png'
// import image2 from '/Assigner Project/assigner-p/public/Item (2).png'
import object from '/Assigner Project/assigner-p/public/OBJECTS.png'
import object1 from '/Assigner Project/assigner-p/public/OBJECTS (1).png'

import img from '/Assigner Project/assigner-p/public/Study resource.png'
import img1 from '/Assigner Project/assigner-p/public/Institutions.png'
import img2 from '/Assigner Project/assigner-p/public/Users.png'


const Studentcount = () => {
  return (
    <>



      <div className="S-Count">

        <div className="S-count-pos">

          <img src={object} alt="" />

        </div>

        <h2 className="S-count-h">700+ students saved, and counting</h2>

        <p className="S-count-p">50K new study notes added every day, from the world’s most active student communities</p>

      </div>

      <div className="S-count-img-border">

        <div className="S-count-img">

          {/* <img src={image} alt=""  className="S-count-img-1"/>
          <img src={image1} alt="" className="S-count-img-2"/>
          <img src={image2} alt="" className="S-count-img-3"/> */}

          <div className="st-size">
            <h1>350+</h1>
            <div className="s-count-image">
            <img src={img} alt="" />
            <p>Study resources</p>
            </div>
           
          </div>
          <div className="st-size">
            <h1>115+</h1>
            <div className="s-count-image">
            <img src={img1} alt="" />
            <p>Institutions</p>
            </div>
            
          </div>
          <div className="st-size">
            <h1>700+</h1>
            <div className="s-count-image">
            <img src={img2} alt="" />
            <p>Users</p>
            </div>
            
          </div>

          <div className="S-count-pos1">

            <img src={object1} alt="" />

          </div>


        </div>

      </div>






    </>
  )
}

export default Studentcount