import React from 'react';
import ReactDOM from 'react-dom';
import Metronome from './components/Metronome';
import './style.scss';
import "regenerator-runtime/runtime";
import "core-js/stable";

ReactDOM.render(<Metronome />, document.getElementById('metronome'));
