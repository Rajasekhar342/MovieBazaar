import { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

const API_URL = 'https://www.omdbapi.com?apikey=39dbe762'

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&S=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }

  // const movie1 = {
  //   Title: 'Spiderman in Cannes',
  //   Year: '2016',
  //   imdbID: 'tt5978586',
  //   Type: 'movie',
  //   Poster:
  //     'https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg',
  // }

  useEffect(() => {
    searchMovies('Batman')
  }, [])

  return (
    <div className='app'>
      <h1>MovieBazaar</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie, index) => {
            return <MovieCard movie={movie} key={index} />
          })}
        </div>
      ) : (
        <div className='empty'>
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  )
}

export default App
