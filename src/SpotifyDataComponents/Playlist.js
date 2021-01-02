import React from 'react'
import { connect } from 'react-redux'
import AppsIcon from '@material-ui/icons/Apps';
import LinkIcon from '@material-ui/icons/Link';
import '../App.css';
import { openModal } from '../actions/actionCreators';

class Playlist extends React.Component {

    render(){
        const {
            showPlaylistModal
        } = this.props 

        let smallImg = (
                this.props.playlist.images.length > 0 && 
                this.props.playlist.images[0]['url']
            ) ? this.props.playlist.images[0]['url'] : "#";

        let playlistURL = this.props.playlist.external_urls && this.props.playlist.external_urls.spotify ? this.props.playlist.external_urls.spotify : "#"

        return <div className="playlist-card">
            <img src={smallImg} alt="playlist profile photo returned from spotify" className="playlist-img"/>
            <div className="playlist-details">
                <div className="name-wrapper">
                    <p className="playlist-name">{this.props.playlist.name}</p>
                </div>
                <div className="playlist-icons">
                    <AppsIcon onClick={() => showPlaylistModal(this.props.playlist)} style={{ color: "#21af43" }}/>
                    <a 
                        className="app-link inline-link"
                        href={playlistURL}
                        target="_blank"
                        rel="noopener noreferrer"
                    ><LinkIcon style={{ color: "#21af43" }} /></a>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        showPlaylistModal: (playlist) => dispatch(openModal(playlist))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)