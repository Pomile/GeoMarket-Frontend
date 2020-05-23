import React from 'react';
import Header from './Header/Header';
import Category from '../Category/Category';
import Markets from '../Markets/Markets';
import Classes from './Section1.module.css';
import SignInBtn from './SignIn/SignInBtn';

const Section1 = (props) => {
    
    return (
        <div className={Classes.Section1}>
            <Header />
            <Category />
            <Markets />
            <SignInBtn />
        </div>
    )
}

export default Section1
