import  React, { Component } from 'react';
import PropTypes from 'prop-types';

class BpmButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.clickHandler(this.props.bpm);
    }

    render() {
        return <button className={this.props.active ? 'active' : ''} onClick={this.handleClick}>{this.props.bpm} BPM</button>;
    }
}

BpmButton.propTypes = {
    active: PropTypes.bool,
    bpm: PropTypes.number.isRequired,
    clickHandler: PropTypes.func.isRequired,
};

BpmButton.defaultProps = {
    active: false
};

export default BpmButton;