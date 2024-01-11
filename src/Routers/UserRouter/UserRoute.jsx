import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  useNavigate,
  Navigate,
} from "react-router-dom";
import HomUser from "../../Pages/UserSide/HomUser";
import LoginUser from "../../Pages/UserSide/LoginUser";
import RegisterUser from "../../Pages/UserSide/RegisterUser";
import axios from "axios";
import { sessionRoute } from "../../Constant/ServerApi";
import Library from "../../Components/Screens/Library/Library";
import Favorates from "../../Components/Screens/Favorites/Favorates";
import Feed from "../../Components/Screens/Feed/Feed";
import Sidebar from "../../Components/Sidebar/Sidebar";
import '../../Components/Sidebar/Home.css'
import Trending from "../../Components/Screens/Trending/Trending";
import Player from "../../Components/Screens/Player/Player";
import SpotifyLogin from "../../Components/Auth/SpotifyLogin";
import { setClientToken } from "../../Spotify";



function UserRoute() {
  const navigate = useNavigate();
  const [isLogin, setLogin] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() =>{
    const token = window.localStorage.getItem("token");
    const hash  = window.location.hash;
    window.location.hash = "";
    if(!token && hash){
      const _token = hash.split('&')[0].split('=')[1];
    // console.log(_token);
    window.localStorage.setItem("token", _token)
    setToken(_token)
    setClientToken(_token)
    } else {
    setToken(token)
    setClientToken(token)
    }
  },[])

  useEffect(() => {
    axios.get(`${sessionRoute}`, { withCredentials: true }).then((res) => {
      if (res.data.valid) {
        setLogin(true);
      }
    });
  }, []);

  return (
    !token ? (
      <SpotifyLogin />
    ) :(
      <div className="main-body">
    <Sidebar />
      <Routes>
<Route
          path="/"
          element={<Library />}
        />
        <Route
          path="/favorites"
          element={<Favorates />}
        />
        <Route
          path="/trending"
          element={<Trending />}
        />
        <Route
          path="/player"
          element={<Player />}
        />
        <Route path="/feed" element={<Feed />} />

        </Routes>
        </div>
    )
    // <div className="main-body">
    //   <Sidebar />

    //   <Routes>
        
    //   {/* <Route path="/log" element={isLogin ? <SpotifyLogin /> : <LoginUser />} /> */}

    //     <Route path="/" element={isLogin ? <HomUser /> : <LoginUser />} />
    //     <Route path="/login" element={isLogin ? <HomUser /> : <LoginUser />} />
    //     <Route
    //       path="/register"
    //       element={isLogin ? <HomUser /> : <RegisterUser />}
    //     />

    //     {/* ================================================================== */}

    //     <Route
    //       path="/library"
    //       element={isLogin ? <Library /> : <RegisterUser />}
    //     />
    //     <Route
    //       path="/favorites"
    //       element={isLogin ? <Favorates /> : <RegisterUser />}
    //     />
    //     <Route
    //       path="/trending"
    //       element={isLogin ? <Trending /> : <RegisterUser />}
    //     />
    //     <Route
    //       path="/player"
    //       element={isLogin ? <Player /> : <RegisterUser />}
    //     />
    //     <Route path="/feed" element={isLogin ? <Feed /> : <RegisterUser />} />

    //     <Route path="/*" element={isLogin ? <HomUser /> : <RegisterUser />} />
    //   </Routes>
    // </div>
  );
}

export default UserRoute;
