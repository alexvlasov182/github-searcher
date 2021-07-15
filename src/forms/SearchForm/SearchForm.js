import React from 'react';

import Input from '../../components/Input/Input';

const SearchForm = ({ onChange, className }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={className}>
      <Input onChange={onChange} />
    </form>
  );
};

export default SearchForm;
