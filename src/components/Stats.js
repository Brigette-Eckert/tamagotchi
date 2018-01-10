import React from 'react';
import PropTypes from 'prop-types';
import {ProgressBar} from 'react-bootstrap';
import '../styles/components/Stats.css';


class Stats extends React.Component {
    render(){
        let { fullness, happiness, hygiene, energy } = this.props;
        return(
            <div className="stats__main">
                <div className="stats__subcontainer">
                    <ProgressBar striped bsStyle="danger" active now={fullness} label="Fullness"/>
                </div>
                <div className="stats__subcontainer">
                    <ProgressBar striped bsStyle="info" active now={happiness} label="Happiness"/>
                </div>
                <div className="stats__subcontainer">
                    <ProgressBar striped bsStyle="warning" active now={hygiene} label="Hygiene"/>
                </div>
                <div className="stats__subcontainer">
                    <ProgressBar striped bsStyle="success" active now={energy} label="Energy"/>
                </div>

            </div>
        )
    }
}

Stats.propTypes = {
    pet: PropTypes.object
};

export default Stats;

