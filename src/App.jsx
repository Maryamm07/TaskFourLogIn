import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import LogIn from './components/LogInPage'
import './App.css'

function App() {

  return (
    <>
      <div className='app'>
        <Router basename='/LogIn'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<LogIn />}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
