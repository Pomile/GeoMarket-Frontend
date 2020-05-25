import React from 'react';
import Classes from './MarketForm.module.css';
import Button from '../Button/Button';

const MarketForm = (props) => {
    return (
        <div className={Classes.MarketForm}>
            
            <div>
                <input type="textarea" name="name" placeholder="name" />
            </div>
            <div>
                <input type="text" name="Street" placeholder="Street" />
            </div>
            <div>
                <input type="text" name="State" placeholder="State" />
            </div>
            <div>
                <input type="text" name="Country" placeholder="Country" />
            </div>
            <div>
                <textarea col={10} row={15} placeholder="Description"></textarea>
            </div>
            
            <div>
                <center> <Button name={"Add market"} style={Classes.Button} /></center>
            </div>
           
        </div>
    )
}

export default MarketForm;
