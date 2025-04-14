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
        className="w-32 rounded-full bg-yellow-100 px-5 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:ring-3 focus:ring-yellow-500 focus:outline-hidden sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
