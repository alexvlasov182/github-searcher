import React from 'react';
import PropTypes from 'prop-types';

import s from './Input.module.scss';

const Input = (props) => {
  return (
      <input
        className={s.inputSearch}
        type="text"
        {...props}
      />

  );
};

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
