import React from 'react';
import Classes from './TabBlock.module.css';

const TabBlock = (props) => {
    return (
        <div className={Classes.TabBlock}>
            <div className={Classes.TabContainer}>
                {props.children}
            </div>
            
        </div>
    )
}

export default TabBlock;
