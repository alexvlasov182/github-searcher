import React from 'react';
import PropTypes from 'prop-types';

import s from './MessageBox.module.scss';

const MessageBox = ({ data }) => {
  return (
    <div className={s.messageBox}>
      <span className={s.icon}>{data.icon}</span>
      <h6 className={s.messageDescription}>{data.message}</h6>
    </div>
  );
};

MessageBox.propTypes = {
  data: PropTypes.object,
};

MessageBox.defaultProps = {
  data: {
    icon: '😏',
    message: 'Search for users and see their data.',
  },
};

export default MessageBox;
