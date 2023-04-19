import React, { useState } from 'react'
import EditPersonal from '../components/EditPersonal'
import EditableComponent from '../components/EditableComponent';

function Personal() {
  const [getName, setUserName] = useState();
  const [getEmail, setUserEmail] = useState();
  const [getPassword, setUserPassword] = useState();
  const [getMobile, setUserMobile] = useState();

  function handleUpdate (e){
    switch (e) {
      case 'name':
        setUserName(true);
        setUserEmail(false);
        setUserPassword(false);
        setUserMobile(false);
        break;
      
      case 'email':
        setUserName(false);
        setUserEmail(true);
        setUserPassword(false);
        setUserMobile(false);
        break;
      
      case 'password':
        setUserName(false);
        setUserEmail(false);
        setUserPassword(true);
        setUserMobile(false);
        break;
      
      case 'mobile':
        setUserName(false);
        setUserEmail(false);
        setUserPassword(false);
        setUserMobile(true);
        break;

      default:
        break;
    }
  };

  return (
    <>  
      <div className='heading'>
        <h5>Personal Details</h5>
      </div>

      <div className='personal'>
        {!getName
          ? <EditPersonal name={'Your Name'} eventKey={'name'} onSelect={handleUpdate} detail={'Excellent Mashengete'} label={'Edit'} appearance={'primary'} mybtn={'editbtn'} block={false} />
          : <EditableComponent HeaderName={'Edit Your Name'} eventKey={'name'} label={'Edit'} appearance={'primary'} mybtn={'editbtn'} block={false}  />
        }

        {!getEmail
          ? <EditPersonal name={'Email Address'} eventKey={'email'} onSelect={handleUpdate} detail={'mashengete@live.com'} label={'Edit'} appearance={'primary'} mybtn={'editbtn'} block={false} />
          : <EditableComponent HeaderName={'Edit Email Address'} eventKey={'email'} />
        }
        {!getPassword
          ? <EditPersonal name={'Password'} eventKey={'password'} onSelect={handleUpdate} detail={'**********'} label={'Edit'} appearance={'primary'} mybtn={'editbtn'} block={false} />
          : <EditableComponent HeaderName={'Reset Password'} eventKey={'password'} />
        }
        {!getMobile
          ? <EditPersonal name={'Mobile Number'} eventKey={'mobile'} onSelect={handleUpdate} detail={'+27 79 351 6579'} label={'Edit'} appearance={'primary'} mybtn={'editbtn'} block={false} />
          : <EditableComponent HeaderName={'Edit Mobile Number'} eventKey={'mobile'} />
        }
     </div>
    </>
  )
}

export default Personal