import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import SearchForm from '../../forms/SearchForm/SearchForm';
import Title from '../../components/Title/Title';
import MessageBox from '../../components/MessageBox/MessageBox';
import List from '../../components/List/List';
import Loader from '../../components/Loader/Loader';

import services from '../../services';

import s from './MainPage.module.scss';

const MainPage = () => {
  const [searchedUser, setSearchedUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();

  const handleSearchUser = (value) => {
    setLoading(true);
    if (value) {
      services
        .searchUser(value)
        .then((res) => {
          setSearchedUser(res.data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setLoading(false);
          setSearchedUser({});
          if (err.response?.status === 404) {
            setError({
              icon: '😬',
              message: `Oooppsss...We couldn't find a user with a name "${value}"`,
            });
          } else {
            setError({
              icon: '😱',
              message: `We expected technical details`,
            });
          }
        });
    } else {
      setSearchedUser({});
      setError(null);
      setLoading(false);
    }
  };

  return (
    <>
      <div className='App'>
        <Title />
        <SearchForm
          className={s.search}
          onChange={(e) => {
            handleSearchUser(e.target.value);
          }}
        />
        {(!Object.keys(searchedUser).length || error) && !loading && (
          <MessageBox data={error || undefined} />
        )}
        {Boolean(Object.keys(searchedUser).length) && !error && !loading && (
          <List onClick={() => history.push(`/users/${searchedUser.id}`)} data={[searchedUser]} />
        )}
        {loading && <Loader />}
      </div>
    </>
  );
};

export default MainPage;
