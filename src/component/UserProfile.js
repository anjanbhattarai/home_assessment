import React, { useState } from 'react'
import { ReactComponent as UserIcon } from "../assets/icons/user.svg"
import  DropDownMoreIcon from "../assets/icons/expand_more.svg"
import  DropDownLessIcon from "../assets/icons/expand_less.svg"



function UserProfile(user) {

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropDownClick = () => {
    setShowDropdown(!showDropdown);
  }

  const userImageColor = (role) => {
      if (role === 'Administrator') return '#2081c3';
      else if (role === 'Viewer') return '#7e7e7e';
      else if (role === 'User') return '#68aaab';
      else return 'black';
  }

  const getLocalDateStringFromDate = (date) =>{
    const d = new Date(date)
    return user.lastLoggedIn = d.toLocaleString()
  }

  const formatPhoneNumber = (phoneNumberString)=> {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' +match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  }

  return (
      <div className = 'user-profile' key={user.id}>
        <div className='profile-picture'>
          <UserIcon className='user-image' style={{fill:userImageColor(user.role)}} />
        </div>
        <div className = 'user-info'>
          <div className='primary'>
            <div className='name'>{user.firstName} {user.lastName}</div>
            <div className='role'>{user.role}</div>
            <div className='email'>{user.email}</div>
          </div>
          { showDropdown && (
            <div className='additional-info'>
              <div className='detailHeader'>
              <b>Address</b>
                <div className="detailItem">{user.street}, {user.city}, {user.state}, {user.zip}</div>  
              </div>
              
              <div className='detailHeader'>
              <b>Phone</b>
                <div className="detailItem">{formatPhoneNumber(user.phone)}</div>  
              </div>

              <div className='detailHeader'>
              <b>Created At</b>
                <div className="detailItem">{getLocalDateStringFromDate(user.createdAt)}</div>  
              </div>

              <div className='detailHeader'>
              <b>Last Logged In</b>
                <div className="detailItem">{getLocalDateStringFromDate(user.lastLoggedIn)}</div>  
              </div>
            </div>
          )}

        </div>

        <div className='drop-down'>
            <img className='dropdown' style={{color: '#7e7e7e'}} src={showDropdown ? DropDownLessIcon : DropDownMoreIcon } onClick={handleDropDownClick}/>
          </div>
      </div>
  )
}

export default UserProfile;