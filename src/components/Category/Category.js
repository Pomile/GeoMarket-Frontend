import React from 'react';
import Classes from './Category.module.css';
import foodIcon from '../../assets/images/food_icon.png';
import fabricsIcon from '../../assets/images/fabrics_icon.png'

const Category = (props) => {
    return (
        <div className={Classes.Category}>
            <div className={[Classes.CategoryItem].join()}>
                <img src={foodIcon} alt="food" />
            </div>
        <div className={Classes.CategoryItem}>
                <img src={fabricsIcon} alt="food" />
            </div>
        </div>
    )
}

export default Category;
