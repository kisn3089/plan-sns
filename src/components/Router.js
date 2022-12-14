import React, {useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';


const Router = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
          {!isLoggedIn && <Route path='/' element={<Auth />}></Route>}
          {isLoggedIn && <Route path='/' element={<Home />}></Route>}
      </Routes>
    </BrowserRouter>
  )
}

export default Router;