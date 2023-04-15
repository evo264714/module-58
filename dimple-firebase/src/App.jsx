import { useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import './App.css'
import app from './firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



function App() {
  const [user, setUser] = useState(null)
 

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, googleProvider)
    .then( result => {
      const loggedUser = result.user;
      setUser(loggedUser);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="App">
     
      <h1>Firebase + React</h1>
      <button onClick={handleGoogleSignIn}>Google sign in</button>
     { user && <div className="card">
        <h1>User: {user.displayName}</h1>

       </div>
     }
     
    </div>
  )
}

export default App
