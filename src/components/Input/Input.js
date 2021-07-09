import React from 'react';

import s from './Input.module.scss';

const Input = () => {
  return (
    <form>
      <input
        className={s.inputSearch}
        id="username"
        placeholder="Search for Users"
        name="username"
        type="text"
      />
    </form>
  );
};

export default Input;
