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
        <EditPersonal name={'Your Name'} detail={'Excellent Mashengete'} label={'Edit'} appearance={'primary'} mybtn={'editbtn'} block={false} />
        <EditPersonal name={'Email Address'} detail={'mashengete@live.com'} label={'Edit'} appearance={'primary'} mybtn={'editbtn'} block={false} />
        <EditPersonal name={'Password'} detail={'**********'} label={'Edit'} appearance={'primary'} mybtn={'editbtn'} block={false} />
        <EditPersonal name={'Mobile Number'} detail={'+27 79 351 6579'} label={'Edit'} appearance={'primary'} mybtn={'editbtn'} block={false} />
      </div>
    </>
  )
}

export default Personal