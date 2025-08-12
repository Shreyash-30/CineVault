import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function MovieCard () {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      const API_KEY = "fe5efe6d5dbfa75dfc8f4553bda8e8e5";
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
      const res = await fetch(url);
      if (!res.ok) return;
      const data = await res.json();
      setMovie(data);
    }
    fetchDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (

    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <p className="text-gray-500">{movie.release_date}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="my-4 rounded"
      />
      <p>{movie.overview}</p>
    </div>

  );
}