import { useState } from 'react'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Category from './components/Category';
import AddData from './components/AddData';
import PageSearch from './components/PageSearch';
import PageCategory from './components/PageCategory';
import Subcribe from './components/Subcribe';
import Detail from './components/Detail';

import { BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/home' element={<Navbar/>}></Route> 
          <Route path='/category' element={<Category/>}></Route> 
          <Route path='/adddata' element={<AddData/>}></Route> 
          <Route path='/pagesearch' element={<PageSearch/>}></Route> 
          <Route path='/pagecategory' element={<PageCategory/>}></Route> 
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/subcribe' element={<Subcribe/>}></Route>
          <Route path='/detail/:id' element={<Detail/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
