import React from 'react'
import { Container } from 'rsuite'
import EditPersonal from '../components/EditPersonal'

function Personal() {
  return (
    <>  
      <div className='heading'>
        <h5>Personal Details</h5>
      </div>
      <div className='cart'>
        <EditPersonal name={'Your Name'} detail={'Excellent Mashengete'} />
        <EditPersonal name={'Email Address'} detail={'mashengete@live.com'} />
        <EditPersonal name={'Password'} detail={'**********'} />
      </div>
    </>
  )
}

export default Personal