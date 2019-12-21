import React, { useState, useEffect } from 'react';
import { getAddress } from './api/address';
import './App.css';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let result = '';
      if (searchValue.length){
        result = await getAddress(searchValue);
      }
      setResults(result);
    }
    fetchData();
}, [searchValue]);

  const submitHandler = (event) => {
    event.preventDefault();
    const user_search = document.querySelector('.user-search').value;
    setSearchValue(user_search);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find Address App</h1>
      </header>
      <section>
        <div className="search-box">
          <form id='form-box' onSubmit={submitHandler}>
            <input type='text' placeholder='Search...' className="user-search" required />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="display-box">
          {results.length ?
          results.map((result) => {
            return (
              <div className="searchResult" key={result.id}>
                {result.weergavenaam}
              </div>
            )
          }) :
          ''}
        </div>
      </section>
      <footer className="App-footer">
        Developed by <a href="https://github.com/allebd" target="_blank" rel="noopener noreferrer">@allebd</a>
      </footer>
    </div>
  );
}

export default App;
