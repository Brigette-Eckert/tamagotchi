import React from 'react';

class Stats extends React.Component {
    render(){
        return(
            <div>
                Actions
                <ul>
                    <li> Alive: Boolean T/F - maybe part of age? </li>
                    <li> Age: time kept alive since "hatched"</li>
                    <li> Hygiene: last time since groomed - decrease with longer time</li>
                    <li> Happiness: last time since played decrease with longer time</li>
                    <li> Hunger: last time since fed- decrease with longer time </li>

                </ul>
            </div>
        )
    }
}

export default Stats;