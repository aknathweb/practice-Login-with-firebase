import { useContext } from 'react';
import { AuthContext } from './Context/ContextProvider';
import Signin from './Login/Signin/Signin';
import Signup from './Login/Signup/Signup';
import Thirdparty from './Login/Thirdparty/Thirdparty';
import './App.css';

function App() {
  const { name } = useContext(AuthContext);
  return (
    <div className='login'>
      {/* profile info start */}
      <div className="profile">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8IQrpci_lb0KcKSoTutxeFX25kDxHk2SfcDguEUp&s" alt="" />
        <strong>{name}</strong>
        <button>logout</button>
      </div>
      {/* profile info end */}
      {/* Login with email start */}
      <div className='sign-in-up'>
        <div className><Signup></Signup></div>
        <div className> <Signin></Signin></div>
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
