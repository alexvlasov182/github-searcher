import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../ListItem/ListItem';

import s from './List.module.scss';

const List = ({ data, onClick, isRepo }) => {
  return (

    <ul>
      {data.map((item, index) => <ListItem key={index} data={item} onClick={onClick} isRepo={isRepo} />)}
    </ul>
  );
};

List.propTypes = {};

List.defaultProps = {};

export default List;
