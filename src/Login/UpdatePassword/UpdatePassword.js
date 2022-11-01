import React, { useContext } from 'react';
import { AuthContext } from '../../Context/ContextProvider';

const UpdatePassword = () => {
    const { user, UserLoginFB, UpdateUserPasswordFB, UpdateUserPasswordEmailSendFB } = useContext(AuthContext);
    const handleUpdatePassword = (e) => {
        e.preventDefault();
        const NewPassword = e.target.NewPassword.value;
        const OldPassword = e.target.OldPassword.value;
        UserLoginFB(user.email, OldPassword)
            .then(() => {
                UpdateUserPasswordFB(NewPassword)
                    .then(() => { })
                    .catch(e => console.log('update pass e:', e));
            })
            .catch(e => console.log('pass login :', e));
    }
    return (
        <div>
            <h1>Password Update</h1>
            <form onSubmit={handleUpdatePassword}>
                <input type="password" name="OldPassword" placeholder="Old Password" />
                <br />
                <input type="password" name="NewPassword" placeholder="New Password" />
                <br />
                <input type="submit" name="submit" placeholder="submit" />
            </form>
            <button onClick={UpdateUserPasswordEmailSendFB}>Set password with Email</button>
        </div>
    );
};

export default UpdatePassword;