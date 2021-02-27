import { element } from "prop-types";
import React from "react";
import s from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendLlist}>
      {friends.map((el) => {
        return (
          <FriendListItem
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
            id={el.id}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
