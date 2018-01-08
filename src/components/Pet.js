import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import '../styles/components/Pet.css'


class Pet extends React.Component {

    render(){
        let { name, status } = this.props;
        return(
            <div>
                <div className="pet__avatar"><img src={`/img/${name}/${status}.png`} alt={name}/></div>
                {/*Kill button for testing purposes */}
              <Button onClick={()=>{this.props.toggleAlive()}} bsSize="large" bsStyle="danger"> Play Dead (Totally not real :-D ) </Button>
            </div>
        )
    }
}

Pet.propTypes = {
    name: PropTypes.string,
    status: PropTypes.string
};

export default Pet;