




  const apiUrl = "https://localhost:5001";

  export const login = (userObject) => {
    return fetch(`${apiUrl}/api/userprofile/getbyemail?email=${userObject.email}`)
    .then((r) => r.json())
      .then((userProfile) => {
        if(userProfile.id){
          localStorage.setItem("userProfile", JSON.stringify(userProfile));
          return userProfile
        }
        else{
          return undefined
        }
      });
  };

  export const logout = () => {
        localStorage.clear()
  };
  
  export const getCurrentUser = () => {
    const currentUser = localStorage.getItem("userProfile");

    return JSON.parse(currentUser);  //JSON.parse()  the local user object coming back from API to use properties of that object
  };


  export const register = (userObject, password) => {
    return  fetch(`${apiUrl}/api/userprofile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    })
    .then((response) => response.json())
      .then((savedUserProfile) => {
        localStorage.setItem("userProfile", JSON.stringify(savedUserProfile))
      });
  };
  
  export const getAllUsers = () => {
    return fetch(`${apiUrl}/api/userProfile`)//http GET request or  `/api/userProfile`
      .then((res) => res.json())
  };

  export const getSingleUser = (id) => {
    return fetch(`${apiUrl}/api/userProfile/${id}`)//http GET request or  `/api/userProfile/${id}`
      .then((res) => res.json())
  };

  export const updateToDeactivateUser = (user) => {
    user.isActive = false
    return fetch(`${apiUrl}/api/userProfile/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
        .then((res) => res.json())
        
      
    
  }
  export const updateToActivateUser = (user) => {
   user.isActive = true
    return fetch(`${apiUrl}/api/userProfile/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
        
  }



  // return (
  //   <UserProfileContext.Provider value={{ isLoggedIn, login, logout, register,  }}>
  //      {props.children}
  //   </UserProfileContext.Provider>
  // );
