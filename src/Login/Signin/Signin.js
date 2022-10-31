import React from 'react';

const Signin = () => {
    const handleSignin = (e) => {
        e.preventDefault();
        // console.log(e.target.name.value)
        const email = e.target.email.value;
        const password = e.target.password.value;
        const LoginUser = {
            email,
            password
        }
        console.log(LoginUser)
    }
    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSignin}>
                <input type="email" name="email" placeholder="email" id="" />
                <br /><input type="password" name="password" placeholder="password" id="" />
                <br /><input type="submit" name="submit" placeholder="submit" id="" />
            </form>
        </div>
    );
};

export default Signin;