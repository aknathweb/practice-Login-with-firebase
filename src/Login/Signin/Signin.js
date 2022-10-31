import React from 'react';

const Signin = () => {
    return (
        <div>
            <h1>Sign In</h1>
            <form>
                <input type="email" name="email" placeholder="email" id="" />
                <br /><input type="password" name="password" placeholder="password" id="" />
                <br /><input type="submit" name="submit" placeholder="submit" id="" />
            </form>
        </div>
    );
};

export default Signin;