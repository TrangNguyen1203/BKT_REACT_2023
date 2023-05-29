import './App.css'
import { Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import CreateBlog from './pages/CreateBlog'
import Home from './pages/Home'

function App() {
  return (
    <>
    {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/blogs' element={<Blog />}></Route>
          <Route path='/create' element={<CreateBlog />}></Route>
        </Route>
        <Route path='*' element={<div>NOT FOUND</div>}></Route>
      </Routes>
    </>
  )
}

export default App
