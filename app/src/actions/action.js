import axios from 'axios';

export const FETCH_CAT_START = "FETCH_CAT_START";
export const FETCH_CAT_SUCCESS = "FETCH_CAT_SUCCESS";
export const FETCH_CAT_FAIL = 'FETCH_MUSIC_FAIL';

export const getCat = () => dispatch =>{
  dispatch({type: FETCH_CAT_START});
  setTimeout(() => {

    axios
    .get('file":"https:\/\/purr.objects-us-east-1.dream.io\/i\/cutest-kitty.gif')
    .then(res => {
    console.log(res.data.cat)
    dispatch({type: FETCH_CAT_SUCCESS, payload: res.data.cat});
})
    .catch(err => dispatch({type: FETCH_CAT_FAIL, payload: err}))

  }, []);
}