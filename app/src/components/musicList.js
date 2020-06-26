import React from 'react';
import { connect } from 'react-redux';
import { getMusic } from '../actions/action';



const MusicList = props => {
    const fetchMusic = e => {
        e.preventDefault();
        props.getMusic();
    };
  

    return (
      <div>

        <h1> Music </h1>
      
          {props.music.map(info =>
            <div>
              <h3>{info.name}</h3>
              <p>{info.listeners}</p>
              <p>{info.followers}</p>
              <a href={info.url}>More Info</a>
            </div>
          )}
        
      
        <button onClick={fetchMusic}>Fetch Music!</button>
    
      </div>
    );
 }

const mapStateToProps = state => {
  return{
  music: state.music,
  error: state.error,
  isFetching: state.isFetching
  }
};

export default connect(
    mapStateToProps,
    {getMusic}
)(MusicList);