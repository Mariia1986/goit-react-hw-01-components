import React from 'react'
import PropTypes from 'prop-types'
import s from './Profile.module.css'


const Profile =({users})=>{
    return (
        <div className="profile">
  <div className="description">
    <img width={200}
      src={users.avatar}
      alt={users.name}
      className="avatar"
    />
    <p className="name">{users.name}</p>
    <p className="tag">{users.tag}</p>
    <p className="location">{users.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity"> {users.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity"> {users.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity"> {users.stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

export default Profile

Profile.PropTypes={
   
}