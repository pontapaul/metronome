import  React, { Component } from 'react';
import PropTypes from 'prop-types';

class BpmButton extends Component {
    render() {
        console.log(this.props);
        return <button className={this.props.active ? 'active' : ''}>{this.props.bpm} BPM</button>;
    }
}

BpmButton.propTypes = {
    active: PropTypes.bool,
};

BpmButton.defaultProps = {
    active: false
};

export default BpmButton;