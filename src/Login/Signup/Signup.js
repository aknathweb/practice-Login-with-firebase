import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/ContextProvider';
import userDefaultImage from './user.png';

const Signup = () => {
    const [errorMessage, setErrormessage] = useState('');
    const { CreateNewUserFB, UpdateUserProfileFB } = useContext(AuthContext);
    const handleSignup = (e) => {
        e.preventDefault();
        const name = e.target.name.value || 'Anonymous';
        const imageURL = e.target.imageURL.value || userDefaultImage;
        const email = e.target.email.value;
        const password = e.target.password.value;
        CreateNewUserFB(email, password)
            .then(result => {
                e.target.reset();
                setErrormessage('');
                UpdateUserProfileFB(name, imageURL)
                    .then(() => { })
                    .catch(e => console.log(e));
            })
            .catch(e => setErrormessage(e.message.toLocaleUpperCase().replaceAll(/FIREBASE:|AUTH|[/:.]|ERROR|/g, '').replaceAll(/[-]/g, ' ')));
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignup}>
                <input type="text" name="name" placeholder="name" />
                <br />
                <input type="text" name='imageURL' placeholder='imageURL' />
                <br />
                <input type="email" name="email" placeholder="email" />
                <br />
                <input type="password" name="password" placeholder="password" />
                <br />
                <input type="submit" name="submit" placeholder="submit" />
                <br />
                {errorMessage}
            </form>
        </div>
    );
};

export default Signup;