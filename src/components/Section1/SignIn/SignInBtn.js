import React from 'react';
import Button from '../../Button/Button';
import Classes from './SignInBtn.module.css';

const SignInBtn = (props) => {
    
    return(<center>
        <Button name={"Sign in"} style={Classes.SignInBtn} clicked={props.navigate}/>
            </center>
    )
}
export default SignInBtn;
