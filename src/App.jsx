import { BrowserRouter, Routes, Route } from 'react-router-dom';
import To from './pages/To';
import From from './pages/From';
import FromTo from './pages/FromTo';
import Navigation from './pages/Navigation';
import Default from './pages/Default';
import Timeline from './pages/Timeline';
import ScrollTrigger from './pages/ScrollTrigger';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation/>} />
        <Route path='/to' element={<To/>} />
        <Route path='/from' element={<From/>} />
        <Route path='/fromto' element={<FromTo/>} />
        <Route path='/default' element={<Default/>} />
        <Route path='/timeline' element={<Timeline/>} />
        <Route path='/scrolltrigger' element={<ScrollTrigger/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
