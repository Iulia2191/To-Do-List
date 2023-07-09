import { Routes, Route } from 'react-router-dom'
import { useReducer } from 'react'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Todo } from './pages/Todo'
import { Page404 } from './pages/Page404'
import { Header } from './components/Header'
import { Chores } from './pages/Chores'
import { Footer } from './components/Footer'
import { Priority } from './pages/Priority'
import {
  initialState as priorityInitialState,
  priorityReducer
} from './store/Priority/reducer'
import { PriorityContext } from './store/Priority/context'
import './App.css'
import Contact from './pages/Contact'

export default function App () {
  const [priorityState, priorityDispatch] = useReducer(
    priorityReducer,
    priorityInitialState
  )
  const priorityContextValue = {
    priorityState,
    priorityDispatch
  }

  return (
    <PriorityContext.Provider value={priorityContextValue}>
      <div className='d-flex flex-column'>
        <div>
          <Header />
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/chores/:id' element={<Chores />} />
          <Route path='/priority' element={<Priority />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </div>
    </PriorityContext.Provider>
  )
}
