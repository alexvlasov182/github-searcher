import React from 'react';

import s from './MessageBox.module.scss';

const MessageBox = () => {
  return (
    <div className={s.messageBox}>
      <span className={s.icon}>😏</span>
      <h6 className={s.messageDescription}>Search for users and see their data.</h6>
    </div>
  );
};

export default MessageBox;
