import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Todo } from './pages/Todo'
import { Page404 } from './pages/Page404'
import { Header } from './components/Header'
import { Chores } from './pages/Chores'
import { Footer } from './components/Footer'
import './App.css'

export default function App () {
  return (
    <div>
      <div>
        <Header />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/chores/:id' element={<Chores />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  )
}
