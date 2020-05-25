import React, { Component} from 'react';
import Section1 from '../../components/Section1/Section1';
import Section2 from '../../components/Section2/Section2';
import Aux from '../../hoc/Wrapper';
import Classes from './Home.module.css';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import LogoHolder from '../../components/Section2/LogoHolder/LogoHolder';
import Caption from '../../components/Section2/Caption/Caption';
import Header from '../../components/Section1/Header/Header';
import Category from '../../components/Category/Category';
import Markets from '../../components/Markets/Markets';
import SignInBtn from '../../components/Section1/SignIn/SignInBtn';

class Home extends Component{
    render() {
        return (
            <Aux>
                <div className={Classes.Home}>
                    <Section1>
                        <Header />
                       <Category />
                        <Markets />
                        <SignInBtn />
                    </Section1>
                    <Section2 noBg={false}>
                        <Backdrop full={false} >
                            <LogoHolder />
                            <Caption />
                        </Backdrop>
                    </Section2>
                </div>
                
            </Aux>
        )
    }
}



export default Home;
