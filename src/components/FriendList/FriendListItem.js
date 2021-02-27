import React from "react";
import s from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline}) => {
  return (
    <li  className={s.item}>
      <span className={s.status}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  isOnline: PropTypes.bool.isRequired,
};
