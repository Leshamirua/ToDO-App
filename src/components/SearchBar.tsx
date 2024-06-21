import React from 'react';

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  return (
      <input 
        type="text"
        onChange={(e) => {onSearch(e.target.value)}}
        placeholder="Пошук справ"
      />
  );
};

export default SearchBar;
