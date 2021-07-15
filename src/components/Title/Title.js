import React from 'react';
import PropTypes from 'prop-types';

import s from './Title.module.scss';

const Title = () => {
  return <h1 className={s.mainTitle}>Github searcher</h1>;
};

Title.propTypes = {};

Title.defaultProps = {};

export default Title;
