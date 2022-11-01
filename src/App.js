import { useContext } from 'react';
import { AuthContext } from './Context/ContextProvider';
import Signin from './Login/Signin/Signin';
import Signup from './Login/Signup/Signup';
import Thirdparty from './Login/Thirdparty/Thirdparty';
import './App.css';
import Updateuser from './Login/Updateuser/Updateuser';

function App() {
  const { user, UserLogOutFB } = useContext(AuthContext);
  const handleLogOut = () => {
    return UserLogOutFB().catch(e => console.log(e));
  }
  return (
    <div className='login'>
      {/* profile info start */}
      <div className="profile">
        {user?.uid ? <><img src={user?.photoURL} alt="" />
          <strong>Name:{user?.displayName}</strong>
          <strong>eamil:{user?.email}</strong>
          <strong>verified:{user?.emailVerified ? 'True' : 'False'}</strong>
          <strong>Join:{user?.metadata.creationTime}</strong>
          <strong>Last visit:{user?.metadata.lastSignInTime}</strong></> : ''}

        {user?.uid ? <button onClick={handleLogOut}>Log Out</button> : <button >Log In</button>}
      </div>
      {/* profile info end */}
      {/* Login with email start */}
      <div className='sign-in-up'>
        <div ><Signup></Signup></div>
        {user?.uid ? <div><Updateuser></Updateuser></div> : ''}
        <div > <Signin></Signin></div>
      </div>
      {/* Login with email end */}
      <br />

      {/* Login with third party start */}
      <div className="third-party">
        <Thirdparty></Thirdparty>
      </div>
      {/* Login with third party end */}
    </div>
  );
}

export default App;
