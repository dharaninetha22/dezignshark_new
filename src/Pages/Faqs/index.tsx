import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb'
import { breadcrumbbanner } from '../../assets'
import Questions from './Questions'

const index = () => {
  return (
    <div>
      <Breadcrumb
        title="Our Story"
        subtitle="Our Selected Works"
        backgroundImage={breadcrumbbanner}
        overlayText="FAQ'S"
      />
      <Questions/>
    </div>
  )
}

export default index
