import Navbar from './components/Navbar'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/blog' element={<Blog />} />
        </Routes>
      {/* <GetInTouch /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
