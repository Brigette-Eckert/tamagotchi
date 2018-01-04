import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Pet.css'


class Pet extends React.Component {
    render(){
        let { name } = this.props.pet;
        let { status } = this.props.pet;
        return(
            <div>
                <h3>{name}</h3>
                <div className="pet__avatar"><img src={`/img/${name}/${status}.png`}/></div>
            </div>
        )
    }
}

Pet.propTypes = {
    pet: PropTypes.object
};

export default Pet;