import React from 'react';
import Classes from './SignInBox.module.css';
import SignInBtn from '../SignIn/SignInBtn';


const SignInBox = (props) => {
    return (
        
        <div className={Classes.SignInBox}>
            <h4>Sign in</h4>
            <div>
                <input type="text" name="email" placeholder="Email" id="email" />
               
            </div>
            <div>
                <input type="password" name="email" placeholder="Password" id="email" />

            </div>
            <SignInBtn navigate={props.signIn}/>
        </div>
    )
}

export default SignInBox;
