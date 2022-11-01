import React, { useContext } from 'react';
import { AuthContext } from '../../Context/ContextProvider';

const Updateuser = () => {
    const { user, UpdateUserProfileFB } = useContext(AuthContext)
    const handleUpdateUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const imageURL = e.target.imageURL.value;
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        UpdateUserProfileFB(name, imageURL)
            .then(() => { })
            .catch(e => console.log(e));
    }
    return (
        <div>
            <h1>Update User</h1>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" placeholder={user?.displayName} />
                <br />
                <input type="text" name='imageURL' placeholder={user?.photoURL} />
                <br />
                <input type="email" name="email" placeholder={user.email} disabled />
                <br />
                {/* <input type="password" name="password" placeholder="password" /> */}
                <br />
                <input type="submit" name="submit" placeholder="submit" />
            </form>
        </div>
    );
};

export default Updateuser;