const API_KEY="c0783d8255bb39799aa39c0e6704d7d1";
const  BASE_URL="https://api.themoviedb.org/3"


export const getPopularMovies=async()=>{
    console.log("inside fn")
   const response=await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
   const data= await response.json();
   return data.results
};

export const searchMovies=async(movie)=>{
    const respone=await fetch(`${BASE_URL}/search/movie/?api_key=${API_KEY}&query=${encodeURIComponent(movie)}`);
    const data= await respone.json();
    return data.results
 };