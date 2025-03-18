import React from 'react'
import { breadcrumbbanner } from '../../assets'
import Locations from './Locations'
import ContactusMap from './ContactusMap'
import ContactUs from './ContactUs'
import Breadcrumb from '../../Components/Breadcrumb'

const index = () => {
  return (
    <div>
        <Breadcrumb
        title="Contact"
        subtitle="Get In Touch"
        backgroundImage={breadcrumbbanner}
        overlayText="Contact Now"
      />
      <Locations/>
      <ContactUs/>
      <ContactusMap/>
      
    </div>
  )
}

export default index
