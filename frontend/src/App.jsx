// import { useState } from 'react'

// import './App.css'
// import Nav from './components/Nav'

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import About from './pages/About'
// import Contact from './pages/Contact'
// import FooterComponent from "./components/FooterComponent"



// import AiGen from './pages/AiGen'

// import Products from './pages/Products'


// function App() {
  

//   return (
//     <>
 
//         <BrowserRouter>
//            <Nav/>
//                  <Routes>
//           <Route path='/' element={<AiGen/>}/>
//           <Route path='/about' element={<About/>}/>
//           <Route path='/contact' element={ <Contact/> }/>
//           <Route path='/products' element={ <Products/> }/>


 
//             {/* <Route path='/create' element={<Create/>}></Route>
//             <Route path='/show/:id' element={<ShowBlog/>}></Route>
//             <Route path='/edit/:id' element={<EditBlog/>}></Route>
//             <Route path='/delete/:id' element={<DeleteBlog/>}></Route>
//             <Route path='/learn' element={<LearnBlog/>}></Route> */}
//      </Routes>
//         <FooterComponent/>
//         </BrowserRouter>
     
        


//     </>
//   )
// }

// export default App




// import './App.css'


// import { BrowserRouter, Routes, Route } from "react-router-dom";

import react from 'react'

import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./utils/routes";

import FooterComponent from "./components/FooterComponent"
import Nav from './components/Nav'

function App() {
  return (
    
  <BrowserRouter>
       <Nav/>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <FooterComponent/>
  </BrowserRouter>

  );
}

export default App;
