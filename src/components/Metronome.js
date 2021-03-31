import  React, { Component } from 'react';
import  Impulse from './Impulse';

class Metronome extends Component {
    render() {
        return <div>
            <h1>Digital Metronome</h1>
            <Impulse />
        </div>;
    }
}

export default Metronome;