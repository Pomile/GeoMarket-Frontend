import React, { Component } from 'react';
import SignInSection from '../../components/Section1/SignInSection';
import Section2 from '../../components/Section2/Section2';
import Aux from '../../hoc/Wrapper';
import Classes from '../../Layout/Layout.module.css';

class Home extends Component {
    render() {
        return (
            <Aux>
                <div className={Classes.Layout}>
                    <SignInSection />
                    <Section2></Section2>
                </div>

            </Aux>
        )
    }
}



export default Home;
