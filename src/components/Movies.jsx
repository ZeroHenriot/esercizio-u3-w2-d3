import Movie from './Movie'
import TopItem from './TopItem'

const Movies = () => {
  return (
    <>
      <TopItem></TopItem>
      <Movie saga={'harry potter'} />
      <Movie saga={'star wars'} />
      <Movie saga={'lord of rings'} />
    </>
  )
}

export default Movies
