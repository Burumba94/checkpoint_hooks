import React {useState} from 'React';
import MovieList from './MovieList';


const App = () => {

  const initMovies =
    [
      {
        title: 'Titanic',
        description: 'Un paquebot de luxe rencontre un iceberg...',
        posterURL: 'https://via.placeholder.com/150',
        rating: 5
      },
      {
        title: 'Forrest Gump',
        description: 'Un homme simple vit des aventures extraordinaires...',
        posterURL: 'https://via.placeholder.com/150',
        rating: 4
      },
      {
        title: 'Advengers',
        description: 'Les super Heros de Marvel studio...',
        posterURL: 'https://via.placeholder.com/150',
        rating: 3
      },
      {
        title: 'Maitraisse dun homme marié',
        description: 'Un homme qui vit avec sa maitresse ...',
        posterURL: 'https://via.placeholder.com/150',
        rating: 2
      },
  
      {
        title: 'Faucons',
        description: 'Des hommes autours du president...',
        posterURL: 'https://via.placeholder.com/150',
        rating: 1
      },
  
    ]



  const [movies, setMovies] = useState(initMovies);


  const [titre,setTitre] =useState("");
  const [rang, setRang]=useState(0);

  const onFilter=()=> {

    let moviesFiltered = initMovies.filter(movie => movie.title.toLowerCase().includes(titre.toLowerCase()))

    if(rang == 0)
      setMovies(moviesFiltered)
    else
      setMovies(moviesFiltered.filter(movie => movie.rating == rang))

  };

  return (

    <div>
    <Filter titre={titre} rang= {rang} setTitre= {setTitre} setRang= {setRang} onFilter= {onFilter} />
    <MovieList movies={movies}/>
    </div>
    
        );
  
}

export default App;