import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/ContextProvider';

const UpdatePassword = () => {
    const [errorMessage, setErrormessage,] = useState('');
    const { user, UserLoginFB, UpdateUserPasswordFB, UpdateUserPasswordEmailSendFB } = useContext(AuthContext);
    const handleUpdatePassword = (e) => {
        e.preventDefault();
        const NewPassword = e.target.NewPassword.value;
        const OldPassword = e.target.OldPassword.value;
        UserLoginFB(user.email, OldPassword)
            .then(() => {
                UpdateUserPasswordFB(NewPassword)
                    .then(() => { setErrormessage('') })
                    .catch(e => setErrormessage(e.message.toLocaleUpperCase().replaceAll(/FIREBASE:|AUTH|[/.:]/g, '')));
            })
            .catch(e => setErrormessage('WRONG PASSWORD'));
    }
    return (
        <div>
            <h1>Password Update</h1>
            <form onSubmit={handleUpdatePassword}>
                <input type="password" name="OldPassword" placeholder="Old Password" required />
                <br />
                <input type="password" name="NewPassword" placeholder="New Password" required />
                <br />
                <input type="submit" name="submit" placeholder="submit" />
                <br />
                {errorMessage}
            </form>
            <button onClick={UpdateUserPasswordEmailSendFB}>Set password with Email</button>
        </div>
    );
};

export default UpdatePassword;