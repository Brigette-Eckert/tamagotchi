import React from 'react';
import PropTypes from 'prop-types';
import {ProgressBar} from 'react-bootstrap';
import '../styles/components/Stats.css';


class Stats extends React.Component {
    render(){
        // let { fullness, happiness, hygiene, energy } = this.state;
        return(
            <div className="stats__main">
                <div className="stats__subcontainer">
                    <h4> Fullness(last time since feed- decrease with time) </h4>
                    <ProgressBar striped bsStyle="danger" active now={50} label="Fullness"/>
                </div>
                <div className="stats__subcontainer">
                    <h4> Happiness (last time since played- decrease with time) </h4>
                    <ProgressBar striped bsStyle="info" active now={50} label="Happiness"/>
                </div>
                <div className="stats__subcontainer">
                    <h4> Hygiene (last time since groomed- decrease with time) </h4>
                    <ProgressBar striped bsStyle="warning" active now={50} label="Hygiene"/>
                </div>
                <div className="stats__subcontainer">
                    <h4> Energy (last time since put to sleep decrease with time) </h4>
                    <ProgressBar striped bsStyle="success" active now={75} label="Energy"/>
                </div>

            </div>
        )
    }
}

Stats.propTypes = {
    pet: PropTypes.object
};

export default Stats;

//TODO: Add stat decrease 1 point per hr
//TODO: if any stat ==  0 change state to dead
//TODO: When action taken - add 10 points per the correlating stat