import React, { useState }  from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/nav/Header";
import ApplicationViews from "./components/views/ApplicationViews";
import { useEffect } from 'react';
import Authorize from './components/views/Authorize';

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);


  useEffect(()=>{   //fixed bug...changed initial state to false
    if(localStorage.getItem("userProfile")){
      setIsLoggedIn(true)
      
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
