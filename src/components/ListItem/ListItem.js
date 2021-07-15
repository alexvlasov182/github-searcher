import { React } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import s from './ListItem.module.scss';

const ListItem = ({ data, onClick, isRepo }) => {
  return (
    <li onClick={onClick} className={classNames(s.container, { [s.withLink]: onClick })}>
      <div className={s.col}>
        {data.avatar_url && (
          <div style={{ backgroundImage: `url(${data.avatar_url})` }} className={s.avatar}></div>
        )}

        <div
          className={classNames(s.textWrapper, {
            [s.withoutAvatar]: !data.avatar_url,
          })}
        >
          <h5>{data.name || data.login}</h5>
          <h6>{data.location}</h6>
          <a className={s.email}>{data.email}</a>
        </div>
      </div>
      {!isRepo ? (
        <div className={s.col}>
          <span className={s.additionalData}>Repos: {data.public_repos}</span>
        </div>
      ) : (
        <div className={s.col}>
          <span className={s.additionalData}>Forks: {data.forks_count}</span>
          <span className={s.additionalData}>Stars: {data.stargazers_count}</span>
        </div>
      )}
    </li>
  );
};

ListItem.propTypes = {
  isVisibleImg: PropTypes.bool,
  data: PropTypes.object,
  isRepo: PropTypes.bool,
};

ListItem.defaultProps = {
  data: {},
  isRepo: false,
};

export default ListItem;
