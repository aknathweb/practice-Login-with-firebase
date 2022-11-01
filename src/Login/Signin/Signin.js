import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/ContextProvider';

const Signin = () => {
    const [errorMessage, setErrormessage] = useState('');
    const { UserLoginFB } = useContext(AuthContext);

    const handleSignin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        UserLoginFB(email, password)
            .then((result) => console.log(result.user))
            .catch(e => setErrormessage(e.message.toLocaleUpperCase().slice(22, -2).split('-').join(' ')));
    }
    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSignin}>
                <input type="email" name="email" placeholder="email" />
                <br /><input type="password" name="password" placeholder="password" />
                <br /><input type="submit" name="submit" placeholder="submit" />
                <br />
                {errorMessage}
            </form>
        </div>
    );
};

export default Signin;