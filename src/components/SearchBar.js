import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { searchRepository } from '../redux/actions/actions';

const SearchBarInput = styled.input`
  margin-top: 1rem;
  padding-left: 1rem;
  width: 300px;
  height: 2rem;
  outline: none;
  border: 1px solid #dddddd;
  border-radius: 20px;
  @include transition(all 0.3s ease-in-out);

  &:focus {
    border: 1px solid rgba(81, 203, 238, 1);
    @include box-shadow(0 0 5px rgba(81, 203, 238, 1));
  }
`;

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    search ? dispatch(searchRepository(search)) : null;
  }, [search]);

  const handleSubmit = (e) => {
    setSearch(e.target.value);
  };

  return (
    <SearchBarInput type="text" placeholder="Search..." value={search} onChange={handleSubmit} />
  );
}
