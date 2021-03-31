import  React, { Component } from 'react';
import  Impulse from './Impulse';
import  BpmButton from './BpmButton';
import PropTypes from "prop-types";

const availableBpm = [72, 74, 82, 84, 128, 138];

class Metronome extends Component {
    constructor(props) {
        super(props);

        this.state= {
            activeBpm: this.props.activeBpm,
        };
    }

    render() {
        return <div className="metronome">
            <h1>Digital Metronome</h1>
            <Impulse />
            <div className="button-list">
                {availableBpm.map(bpm => <BpmButton bpm={bpm} active={(this.state.activeBpm === bpm)} key={bpm} />)}
            </div>
        </div>;
    }
}

Metronome.propTypes = {
    activeBpm: PropTypes.number,
};

Metronome.defaultProps = {
    activeBpm: 72
};

export default Metronome;