import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Movies from './components/Movies'
import MyFooter from './components/MyFooter'
import MyNavBar from './components/MyNavBar'
import ProfilePage from './components/ProfilePage'
import SettingPage from './components/SettingsPage'
import MovieDetails from './components/MovieDetails'
import NotFound from './components/NotFound'
import Home from './components/Home'

// ATTENZIONE, IO USO FIREFOX PER CUI SE ALCUNE COSA SU CHROME SONO DIVERSE NON SO

//PER VEDERE LA PAGINA HOME IMPORTARE SOLO MyNavBar, TopItem, Moives*3 e MyFooter
//PER VEDERE LA PAGINA PROFILE IMPORTARE SOLO MyNavBar, ProfilePage e MyFooter
//PER VEDERE LA PAGINA SETTING IMPORTARE SOLO MyNavBar, SettingPage e MyFooter

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column h-100">
        <header>
          <MyNavBar />
        </header>
        <main className="flex-grow-1">
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/tvshows" element={<Movies />} />
            <Route path="/settings" element={<SettingPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/moviedetail/:movieId" element={<MovieDetails />} />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
