import Image from 'next/image';
import React from 'react'

export default async function moviePage({params}) {
    let {id}= await params

    //https://www.omdbapi.com/?i=${id}&apikey=d5de9a5c
    let response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=d5de9a5c`
      );
      let movie = await response.json();
  return (
    <>
     <h2 className='bg-purple-500'> {movie.Title} details</h2>
     <div className='text-center flex justify-center p-4'>
       
       <div className='w-1/3'> 
       {/* <img src={movie.Poster} alt={movie.Title}/> */}
       <Image width={300} height={400} src={movie.Poster} alt={movie.Title}/>
       </div>
       <div className='w-1/3'>
       <p>{movie.Title}</p>
       <p>{movie.Year}</p>
        </div>
     </div>
    </>
   
  )
}
