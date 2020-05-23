import React from 'react';
import Header from './Header/Header';
import Category from '../Category/Category';
import Classes from './Section1.module.css';
import SignInBox from './SignInBox/SignInBox';


const SignInSection = (props) => {
    return (
        <div className={Classes.Section1}>
            <Header />
            <Category />
            <SignInBox/>
            
        </div>
    )
}

export default SignInSection
