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
import TabBlock from '../../components/Tab/TabBlock';
import Tabs from '../../components/Tab/Tabs/Tabs';
import MarketForm from '../../components/MarketForm/MarketForm';
import MarketImageForm from '../../components/MarketImageForm/MarketImageForm';
import ImageViewer from '../../components/ImageViewer/ImageViewer';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

class Admin extends Component {
    state = {
        display: {
            
            homeDefault: true,
            market: {
                image: false,
                info: false,
                imageViewer: false
            },
            allMarket: false
        }
    }

    addMarketHandler = () => {
        this.setState({
            ...this.state,  display: { homeDefault: false, market: { info: true, image: false}}
        });
    }
    addMarketImageHandler = () => {
        this.setState({
            ...this.state, display: { homeDefault: false, market: { info: false, image: true } }
        });
    }

    imageViewerHandler = () => {
        this.setState({
            ...this.state, display: { homeDefault: false, market: { imageViewer: true, image: true } }
        });
    }
    closeImageViewerHandler = () => {
        this.setState({
            ...this.state, display: { homeDefault: false, market: { imageViewer: false, image: true } }
        });
    }
    render() {
        let displayUI;
        const { display } = this.state;
        const { homeDefault, allMarket, market } = display;
        const { image, info, imageViewer } = market;
        console.log(info, image);
        if (image || info) {
            displayUI = (
                <TabBlock>
                    <Tabs image={image} info={info} addMarket={this.addMarketHandler} addImage={this.addMarketImageHandler}/>
                    {info ? <MarketForm /> : <MarketImageForm upload={this.imageViewerHandler}/>}
                </TabBlock>
            );
        }
        if ( homeDefault && ! allMarket && !(image || info)) {
            displayUI = <AdminDefaultContent />
        }
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
                        <Tools addMarket={this.addMarketHandler}/>
                        {displayUI}
                    </Section2>
                        {imageViewer ? (

                        <Backdrop full={true}>
                            <ImageViewer close={this.closeImageViewerHandler} />
                            </Backdrop>) : null
                        }
                    
                </div>
            </Aux>
        )
    }
}



export default Admin;

