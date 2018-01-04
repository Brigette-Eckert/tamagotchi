import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import '../styles/components/Stats.css';

class Stats extends React.Component {
    render(){
        return(
            <div className="stats__main">
                <h4> Age:(time kept alive since hatched)</h4>
                <div> 5 </div>
                <div className="stats__subcontainer">
                    <h4> Hunger (last time since feed- decrease with time) </h4>
                    <ProgressBar striped bsStyle="danger" active now={hunger} label="Hunger"/>
                </div>
                <div className="stats__subcontainer">
                    <h4> Happiness (last time since played- decrease with time) </h4>
                    <ProgressBar striped bsStyle="info" active now={20} label="Happiness"/>
                </div>
                <div className="stats__subcontainer">
                    <h4> Hygiene (last time since groomed- decrease with time) </h4>
                    <ProgressBar striped bsStyle="warning" active now={80} label="Hygiene"/>
                </div>
                <div className="stats__subcontainer">
                    <h4> Energy (last time since put to sleep decrease with time) </h4>
                    <ProgressBar striped bsStyle="success" active now={60} label="Energy"/>
                </div>

            </div>
        )
    }
}
// if any stat ==  0 change state to dead
export default Stats;