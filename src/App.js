
import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App =()=>{

    return (
      <BrowserRouter>
      <div>
      <Navbar/>
      <Routes>
       <Route exact path='/' element={<News country="in" key="general"category="general"pageSize={8}/>}/>
       <Route exact path='/business' element={<News country="in" key="buisness"category="buisness"pageSize={8}/>}/>
       <Route exact path='/science' element={<News country="in" key="science"category="science"pageSize={8}/>}/>
       <Route exact path='/general' element={<News country="in" key="general"category="general"pageSize={8}/>}/>
       <Route exact path='/sports' element={<News country="in" key="sports"category="sports"pageSize={8}/>}/>
       <Route exact path='/entertainment' element={<News country="in" key="entertainment"category="entertainment"pageSize={8}/>}/>
       <Route exact path='/health' element={<News country="in" key="health"category="health"pageSize={8}/>}/>
       <Route exact path='/technology' element={<News country="in" key="technology"category="technology"pageSize={8}/>}/>
     
      </Routes>
    
      </div>
      </BrowserRouter>
    )
  
}
export default App


