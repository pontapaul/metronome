import  React, { Component } from 'react';
import PropTypes from 'prop-types';

class Impulse extends Component {
    render() {
        return <div className="impulse">
            <div className="sphere" style={{'animationDuration': (60/this.props.bpm) + 's'}}>{this.props.bpm}</div>
        </div>;
    }
}

Impulse.propTypes = {
    bpm: PropTypes.number.isRequired,
};

export default Impulse;