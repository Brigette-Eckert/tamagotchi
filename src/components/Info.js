import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Info.css';

class Info extends React.Component{
    render(){
        let { name, species, age, hatchDate } = this.props;
      console.log("hatch date" + hatchDate);
        return(
            <div>
                <h1> {name} the {species}</h1>
              <h3> Hatch Date: {hatchDate.toLocaleString()} </h3>
                <h3> Age:  {age}  </h3>
            </div>)
    }
}

Info.propTypes = {
    pet: PropTypes.object
};

export default Info;

