import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { useEffect } from "react";
import axios from "axios";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchmovie, setsearchmovie] = useState("");
  const [movies, setmovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const getmovies = async () => {
      try {
        const data = await getPopularMovies(); //getting the data from api which is a async function
        setmovies(data);
      } catch (e) {
        console.log("Error Fetching API data");
      } finally {
        setloading(false);
      }
    };
    getmovies(); //as we cant directly use async fn inside useeffect we use fn inside fn.
  }, []);
  const searchfn = async (e) => {
    e.preventDefault();
    if (!setsearchmovie.trim()) return;
    if (loading) return;

    setloading(true);
    try {
      const searchResults = await searchmovie(searchQuery);
      setmovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setloading(false);
    }
  };
  setTimeout(() => console.log(movies), 5000);
  return (
    <div className="Home">
      <form onSubmit={searchfn} className="search-form">
        <input
          type="text"
          placeholder="Search For Movies"
          className="search-input"
          onChange={(e) => {
            setsearchmovie(e.target.value);
          }}
        />

        <button className="search-button">Search</button>
      </form>
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
