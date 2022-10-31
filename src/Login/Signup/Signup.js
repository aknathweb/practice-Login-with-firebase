import React from 'react';

const Signup = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <form>
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