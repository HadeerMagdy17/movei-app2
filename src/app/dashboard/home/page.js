import Link from "next/link";
import React from "react";

export default async function home() {
  let response = await fetch(
    "https://www.omdbapi.com/?s=batman&type=movie&apikey=d5de9a5c&page=2"
  );
  let data = await response.json();
  let movies = data?.Search;
  // console.log("data is ", movies);
  return(
    <>
      <div className='text-center'>
      <h1 className='text-3xl p-5 font-bold text-cyan-600'>Movies App</h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6">
        { movies.map((movie) => (
          <Link key={movie.imdbID}
           href={`/movie/${movie.imdbID}`}
           >
            <div className="h-62 rounded-lg bg-gray-200 p-1 cursor-pointer">
              <img src={movie.Poster} alt={movie.Title}
               className="w-full "
              // h-53
              //  object-cover rounded-md" 
               />
              <h2 className="text-lg font-bold">{movie.Title}</h2>
              <p>{movie.Year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  )
  

}
