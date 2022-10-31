import React, { useContext } from 'react';
import { AuthContext } from '../../Context/ContextProvider';

const Signup = () => {
    const { user, setUser, CreateNewUserFB } = useContext(AuthContext);

    const handleSignup = (e) => {
        e.preventDefault();
        // console.log(e.target.name.value)
        const name = e.target.name.value;
        const imageURL = e.target.imageURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const SignupUser = {
        //     name,
        //     imageURL,
        //     email,
        //     password
        // }
        // console.log(SignupUser)
        CreateNewUserFB(email, password).then(CurrentUser => setUser(CurrentUser)).catch(e => console.log(e));
        console.log("user email: ", user.email);
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignup}>
                <input type="text" name="name" placeholder="name" id="" />
                <br />
                <input type="text" name='imageURL' placeholder='imageURL' />
                <br />
                <input type="email" name="email" placeholder="email" id="" />
                <br />
                <input type="password" name="password" placeholder="password" id="" />
                <br />
                <input type="submit" name="submit" placeholder="submit" id="" />
            </form>
        </div>
    );
};

export default Signup;