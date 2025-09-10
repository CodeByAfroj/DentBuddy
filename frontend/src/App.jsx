import { useState } from 'react'
import TextType from './components/TextType'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Loader from './components/Loader'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import FooterComponent from "./components/FooterComponent"


import Create from './pages/CreateBlog'
import ShowBlog from "./pages/ShowBlog"
import EditBlog from "./pages/EditBlog"
import DeleteBlog from "./pages/DeleteBlog"
import LearnBlog from './pages1/LearnBlog'
import AiGen from './pages/AiGen'
import Product from "./pages/Products"
import Products from './pages/Products'


function App() {
  

  return (
    <>
    <Nav/>
     <Routes>
          <Route path='/' element={<AiGen/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={ <Contact/> }/>
          <Route path='/products' element={ <Products/> }/>


            <Route path='/' element={<Home/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
            <Route path='/show/:id' element={<ShowBlog/>}></Route>
            <Route path='/edit/:id' element={<EditBlog/>}></Route>
            <Route path='/delete/:id' element={<DeleteBlog/>}></Route>
            <Route path='/learn' element={<LearnBlog/>}></Route>
     </Routes>
     <FooterComponent/>
        


    </>
  )
}

export default App
