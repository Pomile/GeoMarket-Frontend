import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import * as actions from '../../strore/actions';
import Location from '../../components/Location/Location';

class Home extends Component{
    SignInHandler = () => {
        this.props.history.replace("/login");
    }
    marketHandler = () => {
        this.props.history.replace("/market")
    }
    getMarketsByCategoryHandler = async (value) => {
        
        const markets = await this.props.getMarketsByCategory({category: value});
        return markets
    }
    componentDidMount() {
        const { category } = this.props.markets;
        this.getMarketsByCategoryHandler(category);
    }
    render() {
        const { markets, location, marketName } = this.props.markets;
        const { displayLocationBox } = this.props.ui;
        console.log(displayLocationBox);
        return (
            <Aux>
                <div className={Classes.Home}>
                    <Section1>
                        <Header
                            marketName = {marketName}
                            location={location}
                            setDisplayLocationBox={this.props.setDisplayLocationBox}
                            setMarketName={this.props.setMarketName}
                            getMarketsByName={this.props.getMarketsByName}
                            getMarketsByNameAndLocation={this.props.getMarketsByNameAndLocation}   
                        />
                        <Category
                            location={location}
                            getMarketsByCategory={this.props.getMarketsByCategory}
                            getMarketsByCategoryAndLocation={this.props.getMarketsByCategoryAndLocation}
                        />
                        <Markets clickable={true} markets={markets} marketHandler={this.marketHandler}/>
                        <SignInBtn navigate={this.SignInHandler} />
                        <Location
                            show={displayLocationBox}
                            setDisplay={this.props.setDisplayLocationBox}
                            change={this.props.setLocation}
                        />
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


// set marketName value
// get 

const mapStateToProps = state => {
    return {
        markets: state.markets,
        ui: state.ui
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMarketCategory: (event) => dispatch(actions.setMarketCategory(event)),
        setDisplayLocationBox: (show) => dispatch(actions.displayLocationBox(show)),
        getMarketsByCategory: (value) => dispatch(actions.getMarketsByCategory(value)),
        getMarketsByCategoryAndLocation: ({location, category}) => dispatch(actions.getMarketsByCategoryAndLocation({location, category})),
        setLocation: (event) => dispatch(actions.setLocation(event)),
        setMarketName: (event) => dispatch(actions.setMarketName(event)),
        getMarketsByName: (name) => dispatch(actions.getMarketsByName(name)),
        getMarketsByNameAndLocation: (location, name) => dispatch(actions.getMarketsByNameAndLocation(location, name))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
