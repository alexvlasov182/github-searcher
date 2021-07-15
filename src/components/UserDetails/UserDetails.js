import React from 'react';

import s from './UserDetails.module.scss';

const UserDetails = ({ data, avatar }) => {
  return (
    <>
      <div className={s.userDetails}>
        <div
          style={{
            backgroundImage: `url(${
              avatar ||
              'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
            })`,
          }}
          className={s.avatar}
        ></div>

        <ul className={s.details}>
          {Object.keys(data).map((name, index) => (
            <li key={index}>
              {name}: <span>{data[name]}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className={s.bio}>{data.bio}</p>
    </>
  );
};

export default UserDetails;
