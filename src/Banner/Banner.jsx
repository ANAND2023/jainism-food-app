import React from 'react'
import banner from '../assets/image/banner.jpg'
function Banner() {
  return (
  <>
   <section className="ban">
        <div className="banner_img">
            <img src={banner} alt=""/>
        </div>
    </section>
  </>
  )
}

export default Banner