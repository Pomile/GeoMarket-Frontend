import React, { Component} from 'react';
import Section1 from '../../components/Section1/Section1';
import Section2 from '../../components/Section2/Section2';
import Aux from '../../hoc/Wrapper';
import Classes from './Home.module.css';

class Home extends Component{
    render() {
        return (
            <Aux>
                <div className={Classes.Home}>
                    <Section1></Section1>
                    <Section2></Section2>
                </div>
                
            </Aux>
        )
    }
}



export default Home;
