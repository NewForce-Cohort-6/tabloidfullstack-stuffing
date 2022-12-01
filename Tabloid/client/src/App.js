import React, { useState }  from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/nav/Header";
import ApplicationViews from "./components/views/ApplicationViews";
import { useEffect } from 'react';
import Authorize from './components/views/Authorize';

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(true);


  useEffect(()=>{  
    if(!localStorage.getItem("userProfile")){
      setIsLoggedIn(false)
      
    }
  },[isLoggedIn])

  return (
    <Router>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        { isLoggedIn ?
        <ApplicationViews  />
        :
        <Authorize setIsLoggedIn={setIsLoggedIn}/>
        }
    </Router>
  );
}

export default App;
