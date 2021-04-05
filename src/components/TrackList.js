import  React, { Component } from 'react';
import Spotify from '../api/Spotify';
import PropTypes from 'prop-types';

class TrackList extends Component {
    constructor(props) {
        super(props);

        this.Spotify = new Spotify(process.env.SPOTIFY_CLIENT_ID, process.env.SPOTIFY_CLIENT_SECRET);
        this.state= {
            tracks: [],
            loading: true,
        };

        this.fetchSongs(false);
    }

    fetchSongs(toggleLoader = true) {
        if(toggleLoader) {
            this.setState({loading: true});
        }

        this.Spotify.searchByBpm(this.props.bpm).then(data => this.setState({
            tracks: data.tracks,
            loading: false,
        }));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.bpm !== this.props.bpm) {
            this.fetchSongs();
        }
    }

    render() {
        return <div className={"song-list " + (this.state.loading ? 'loading' : '')}>
            <h3>Songs that use this BPM:</h3>
            <div className="loader" />
            {this.state.tracks.map(track => <p key={track.id}>
                {track.name} ({track.artists.map(artist => artist.name).join(', ')}) <a href={track.uri} target="_blank" title="Play on Spotify"> &#9658;</a>
            </p>)}
        </div>;
    }
}

TrackList.propTypes = {
    bpm: PropTypes.number.isRequired,
};


export default TrackList;