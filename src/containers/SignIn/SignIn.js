import React, { Component } from 'react';
import Section2 from '../../components/Section2/Section2';
import Aux from '../../hoc/Wrapper';
import Classes from '../../Layout/Layout.module.css';
import Section1 from '../../components/Section1/Section1';
import Header from '../../components/Section1/Header/Header';
import Category from '../../components/Category/Category';
import SignInBox from '../../components/Section1/SignInBox/SignInBox';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import LogoHolder from '../../components/Section2/LogoHolder/LogoHolder';
import Caption from '../../components/Section2/Caption/Caption';

class SignIn extends Component {
    signInHandler = () => {
        this.props.history.replace("/admin");
    }
    render() {
        return (
            <Aux>
                <div className={Classes.Layout}>
                    <Section1>
                        <Header />
                        <Category />
                        <SignInBox signIn={this.signInHandler}/>
                    </Section1>
                    <Section2 noBg={false}>
                        <Backdrop >
                            <LogoHolder />
                            <Caption />
                        </Backdrop>   
                    </Section2>
                </div>
            </Aux>
        )
    }
}



export default SignIn;
