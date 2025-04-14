import { useState } from 'react';
import { useNavigate } from 'react-router';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleQueryChange(evt) {
    setQuery(() => evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery(() => '');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order number"
        value={query}
        onChange={handleQueryChange}
        type="text"
      />
    </form>
  );
}

export default SearchOrder;
