import React from 'react';
import Classes from './Category.module.css';
import foodIcon from '../../assets/images/food_icon.png';
import fabricsIcon from '../../assets/images/fabrics_icon.png'

const Category = (props) => {
    const { location } = props;
    console.log(location);
    let getMarkets;
    const food = 'food';
    const fabrics = 'fabrics';
    if (location === '') {
        getMarkets = props.getMarketsByCategory;
        
    } else {
        getMarkets = props.getMarketsByCategoryAndLocation
    }

    return (
        <div className={Classes.Category}>
            <div className={[Classes.CategoryItem].join()} onClick={()=>  getMarkets({location, category: food}) }>
                <img src={foodIcon} alt="food" />
            </div>
            <div className={Classes.CategoryItem} onClick={() => getMarkets({ location, category: fabrics })}>
                <img src={fabricsIcon} alt="fabrics" />
            </div>
        </div>
    )
}

export default Category;
