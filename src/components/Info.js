import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Info.css';

class Info extends React.Component{
    render(){
        let { name, species, age } = this.props;
        return(
            <div>
                <h2> {name} the {species}</h2>
                <h4> Age:  {age}  </h4>
            </div>)
    }
}

Info.propTypes = {
    pet: PropTypes.object
};

export default Info;
