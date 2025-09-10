// import {Routes,Route} from "react-router-dom";
// import './App.css'
// import Create from "./pages/Create";
// import Delete from "./pages/Delete";
// import Edit from "./pages/Edit";
// import Show from "./pages/Show";
// import Home from "./pages/Home";
// import Nav from "./pages/Nav";

// function App() {
 

//   return (

//     <>
//       <Nav/>
//       <Home/>
//            <Routes>
//                <Route path="/" element={<Home/>} />
//                <Route path="/create" element={<Create/>} />
//                <Route path="/show" element={<Show/>} />
//                <Route path="/edit" element={<Edit/>} />
//                <Route path="/delete" element={<Delete/>} />
//           </Routes>
      
     
//     </>
//   )
// }

// export default App

import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from './BackButton'


function ShowBlog() {
  const [info, setInfo] = useState({})
   const {id} = useParams();
  useEffect(()=>{
    axios.get(`http://localhost:3000/api/show/${id}`)
    .then((response)=>{
      setInfo(response.data)
      console.log(response.data)
      
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  return (
    <>
      <BackButton/>
    <div className='h-screen  flex flex-row justify-center'>
    <div className='  h-screen w-screen flex justify-center items-center '>
       <div className='p-2 gap-4  '>
       <h2 className='text-3xl '>Title:{info.title}</h2>
      
      
       <div className='h-auto w-auto m-2 p-4 outline-2 outline-purple-400 rounded-xl ' key={info._id}>
           <img className='outline-2 rounded-xl outline-blue-300 ' width="400" height="100" src={info.imageUrl} alt="Blog Image" />
          <div className=' overflow-hidden'>
          <p>{info.description}</p>
          <p>{info.price}</p>
           {/* <p>{new Date(info.createdAt).toString()}</p>                 
           <p>{new Danfo.updatedAt).toString()}</p> */}
          </div>
          
        </div>
        
    
       </div>
     </div>
    </div>
    </>
  )
}

export default ShowBlog;
