import React, { Component } from 'react';
import Aux from '../../hoc/Wrapper';
import Classes from '../../Layout/Layout.module.css';
import Section1 from '../../components/Section1/Section1';
import Section2 from '../../components/Section2/Section2';
import AdminHeader from '../../components/Section1/Header/AdminHeader';
import Classes2 from './Admin.module.css';
import Header from '../../components/Header/Header';
import Tools from '../../components/Tools/Tools';
import AdminDefaultContent from '../../components/AdminDefaultContent/AdminDefaultContent';

class Admin extends Component {
    state = {
        default: true,
        addMarket: false,
        allMarket: false
        
    }
    render() {
        return (
            <Aux>
                <div className={Classes.Layout}>
                    <Section1>
                        <AdminHeader />
                        <div className={Classes2.AdminSectionTabs}>
                            <div className={Classes2.AdminSectionTab}>Market</div>
                        </div>  
                    </Section1>
                    <Section2 noBg = {true}>
                        <Header />
                        <Tools />
                        <AdminDefaultContent />
                    </Section2>
                </div>
            </Aux>
        )
    }
}



export default Admin;

