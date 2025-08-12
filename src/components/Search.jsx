
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react'
// async function getData(name){
//     const API_Key = 'fe5efe6d5dbfa75dfc8f4553bda8e8e5'
//     const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_Key}&query=${encodeURIComponent(name)}
// `
// const responce = await fetch(url);
// if(!responce.ok)throw new error("Movie Not Found")

//     const data = await  responce.json;
//     console.log(data)
//     return data 

// }


export default function Search() {
   const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchText.trim()) {
      setSuggestions([]);
      return;
    }
    const delay = setTimeout(() => fetchMovies(searchText), 300);
    return () => clearTimeout(delay);
  }, [searchText]);

  async function fetchMovies(query) {
    const API_KEY = "fe5efe6d5dbfa75dfc8f4553bda8e8e5";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    if (!response.ok) return;
    const data = await response.json();
    setSuggestions(data.results);
  }

  function handleSelectMovie(movie) {
    navigate(`/movie/${movie.id}`); // Go to movie page
  }

  return (
    <div className="max-w-sm mx-auto">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
        className="w-full border p-2 rounded"
      />
      {suggestions.length > 0 && (
        <ul className="border mt-1 rounded">
          {suggestions.map((movie) => (
            <li
              key={movie.id}
              onClick={() => handleSelectMovie(movie)}
              className="p-2 cursor-pointer hover:bg-gray-100"
            >
              {movie.title} ({movie.release_date?.split("-")[0] || "N/A"})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}