import React from 'react';
import Thing from './Thing'

const ThingsContainer = props => {
    return (
        <div>
            <ul className="list-group">
                {props.lista.map((thing) =>  <Thing>{thing}</Thing>   )}
                <li className="list-group-item list-group-item-success">Morbi leo risus</li>
            </ul> 
        </div> 
    )
}

export default ThingsContainer;