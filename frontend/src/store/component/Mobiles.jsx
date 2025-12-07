import React from 'react'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom';

const Mobiles = () => {

    const firstfive=mobileData.slice(0,5);
  return (
    <>
    <div className="home-banner">
      <img
        src="newbanner.jpeg"
        alt="Main Banner"
        className="banner-image"
      />

     
    </div>

    <h2>“Stay connected in style — latest smartphones at unbeatable prices!”</h2>
    <div className="mobimg">
{
firstfive.map((item)=>{
    return(

      <Link to={`/mobile/${item.id}`}>
      <div className="mobimgs">
        <img src={item.image} alt="" className="mobileimages" />
        <h3>{item.company}</h3>
      </div>
    </Link>
    
        
        
    )
})


}
</div>

    </>
  )
}

export default Mobiles
