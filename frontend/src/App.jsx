// import { useState } from 'react'

// import './App.css'
// import Nav from './components/Nav'

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import About from './pages/About'
// import Contact from './pages/Contact'
// import FooterComponent from "./components/FooterComponent"
// import Create from "./pages/CreateBlog"
// import Edit from "./pages/EditBlog"

// import AiGen from './pages/AiGen'

// import Products from './pages/Products'
// import Home from "./pages/Home";


// function App() {
  

//   return (
//     <>
 
//         <BrowserRouter>
//            <Nav/>
//                  <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/about' element={<About/>}/>
//           <Route path='/contact' element={ <Contact/> }/>
//           <Route path='/products' element={ <Products/> }/>


 
//             <Route path='/create' element={<Create/>}></Route>
//             {/* <Route path='/show/:id' element={<ShowBlog/>}></Route> */}
//             <Route path='/edit/:id' element={<Edit/>}></Route>
//             {/* <Route path='/delete/:id' element={<DeleteBlog/>}></Route>
//             <Route path='/learn' element={<LearnBlog/>}></Route> */}
//      </Routes>
//         <FooterComponent/>
//         </BrowserRouter>
     
        


//     </>
//   )
// }

// export default App










import React from "react";


import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./utils/routes";

import FooterComponent from "./components/FooterComponent"
import Nav from './components/Nav'
import ReactGA from "react-ga4";
function App() {


   useEffect(() => {
    // Initialize Google Analytics with your Measurement ID
    ReactGA.initialize("G-QHNZ0E7W7Q"); 

    // Send first pageview when the app loads
    ReactGA.send("pageview");
  }, []);
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
