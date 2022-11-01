import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/ContextProvider';

const Thirdparty = () => {
    const { LoginWithPopup } = useContext(AuthContext);
    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();
    return (
        <div>
            <button onClick={() => LoginWithPopup(GoogleProvider)}>Google</button>
            <button onClick={() => LoginWithPopup(GithubProvider)}>GitHub</button>
        </div>
    );
};

export default Thirdparty;