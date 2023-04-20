import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Basket from './components/Basket'
function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/basket' element={<Basket />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
