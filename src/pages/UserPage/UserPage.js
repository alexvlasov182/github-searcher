import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

import Title from '../../components/Title/Title';
import SearchForm from '../../forms/SearchForm/SearchForm';
import List from '../../components/List/List';
import UserDetails from '../../components/UserDetails/UserDetails';
import MessageBox from '../../components/MessageBox/MessageBox';

import s from './UserPage.module.scss';

import services from '../../services';
import Loader from '../../components/Loader/Loader';

const UserList = () => {
  const reposRef = useRef([]);
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [repoLoading, setRepoLoading] = useState(true);
  const [repoError, setRepoError] = useState(null);
  const [repos, setRepos] = useState([]);

  const { name, email, location, created_at, followers, following, login, avatar_url, bio } = user;

  useEffect(() => {
    services
      .getUser(id)
      .then((res) => {
        setLoading(false);
        setUser(res.data);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 404) {
          setError({
            icon: '😬',
            message: `Oooppsss...We couldn't find a user with id '${id}' `,
          });
        } else {
          setError({
            icon: '😱',
            message: `We expected technical details`,
          });
        }
      });
    services
      .getAllRepos(id)
      .then((res) => {
        reposRef.current = res.data;
        setRepos(res.data);
        setRepoLoading(false);
      })
      .catch(() => {
        setRepoError({
          icon: '😱',
          message: `We expected technical details`,
        });
      });
  }, []);

  let flag = useRef(false);
  console.log('flag', flag);

  const handleSearchRepo = (e) => {
    const value = e.target.value;

    if (value) {
      flag.current = false;
      setRepoLoading(true);
      services
        .searchRepos(value, login)
        .then((res) => {
          setRepoError(null);
          setRepos([res.data]);
          setRepoLoading(false);
        })
        .catch((err) => {
          setRepoLoading(false);
          if (!flag.current) {
            if (err.response.status === 404) {
              setRepoError({
                icon: '😬',
                message: `Oooppsss...We couldn't find a user with id '${id}' `,
              });
            } else {
              setRepoError({
                icon: '😱',
                message: `We expected technical details`,
              });
            }
          }
        });
    } else {
      flag.current = true;
      setRepoError(null);
      setRepos(reposRef.current);
      console.log('test');
    }
  };
  console.log('repoError', repoError, repos);
  return (
    <div className='App'>
      <Link className={s.linkStyle} to='/'>
        <Title />
      </Link>
      {!error && !loading && (
        <>
          <UserDetails
            data={{
              Name: name || login,
              Email: email || 'no data',
              Location: location || 'no data',
              'Created at': new Date(created_at).toLocaleDateString() || 'no data',
              Followers: followers || 'no data',
              Following: following || 'no data',
            }}
            avatar={avatar_url}
          />
          <p className={s.bio}>{bio || 'bio is not defined'}</p>
          <SearchForm onChange={handleSearchRepo} className={s.search} />

          {!repoError && repos.length > 0 && !repoLoading && (
            <List className={s.list} data={repos} isRepo={true} />
          )}
          {repoError && !repoLoading && <MessageBox data={repoError} />}
          {repoLoading && <Loader />}
        </>
      )}
      {error && !loading && <MessageBox data={error} />}
      {loading && <Loader />}
    </div>
  );
};

export default UserList;
