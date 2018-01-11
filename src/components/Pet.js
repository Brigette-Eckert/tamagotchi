import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Pet.css'


class Pet extends React.Component {

    render(){
        let { name, status } = this.props;
        return(
            <div>
                <div className="pet__avatar"><img src={`/img/${name}/${status}.png`} alt={name}/></div>
            </div>
        )
    }
}

Pet.propTypes = {
    name: PropTypes.string,
    status: PropTypes.string
};

export default Pet;