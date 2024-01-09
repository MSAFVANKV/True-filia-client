import React, { useEffect, useState } from 'react'
import {Route, Routes, BrowserRouter, useNavigate, Navigate} from 'react-router-dom'
import HomUser from '../../Pages/UserSide/HomUser'
import LoginUser from '../../Pages/UserSide/LoginUser'
import RegisterUser from '../../Pages/UserSide/RegisterUser'
import axios from 'axios'
import { sessionRoute } from '../../Constant/ServerApi'
import Library from '../../Components/Screens/Library'
import Favorates from '../../Components/Screens/Favorates'
import Feed from '../../Components/Screens/Feed'

function UserRoute() {
  const navigate = useNavigate();
  const [isLogin,setLogin] = useState(false)

  useEffect(() => {
    axios.get(`${sessionRoute}`, { withCredentials:true })
    .then(res => {
        if (res.data.valid) {
          setLogin(true)
        }
    })
},[])

  return (
    
       <>
       <Routes>
       
          {/* <Route path='/' element={isLogin ? <Navigate to="/filia" />  : <LoginUser />} />
          <Route path='/filia' element={isLogin ? <HomUser /> : <Navigate to="/" />} /> */}
          <Route path='/' element={isLogin ? <HomUser /> : <LoginUser />} />
          <Route path='/login' element={isLogin ? <HomUser /> : <LoginUser />} />
          <Route path='/register' element={isLogin ? <HomUser /> : <RegisterUser />} />

          {/* ================================================================== */}

          <Route path='/library' element={isLogin ? <Library /> : <RegisterUser />} />
          <Route path='/favorates' element={isLogin ? <Favorates /> : <RegisterUser />} />
          <Route path='/feed' element={isLogin ? <Feed /> : <RegisterUser />} />

          <Route path='/*' element={isLogin ? <HomUser /> : <RegisterUser />} />

        
        </Routes>
       </>
  )
}

export default UserRoute