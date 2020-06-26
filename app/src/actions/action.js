import axios from 'axios';
export const FETCH_MUSIC_START = 'FETCH_MUSIC_START';
export const FETCH_MUSIC_SUCCESS = 'FETCH_MUSIC_SUCCESS';
export const FETCH_MUSIC_FAIL = 'FETCH_MUSIC_FAIL';

export const getMusic = () => dispatch =>{
    dispatch({type: FETCH_MUSIC_START});
    setTimeout(() => {
   
        axios .get('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=53d56d94234b82b6638be14996b2b8c8&format=json')
            .then(res => {
            console.log(res.data.artists.artist)
            dispatch({type: FETCH_MUSIC_SUCCESS, payload: res.data.artists.artist});
        })
            .catch(err => dispatch({type: FETCH_MUSIC_FAIL, payload: err}))

    }, []);
}