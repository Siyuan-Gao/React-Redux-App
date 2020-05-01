// import React from 'react';
// import { connect } from 'react-redux';
// import { getCat } from ''

import { FETCH_CAT_START, 
         FETCH_CAT_SUCCESS,
          FETCH_CAT_FAIL
} from '../actions/action';

const initialState = {
  cat: [],
  error: '',
  isFetching: false
};

export const rootReducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type){
      case FETCH_CAT_START:
          return {
              ...state, 
              isFetching: true,
              cat: []
          };
      case FETCH_CAT_SUCCESS:
          return {
              ...state, 
              cat: action.payload,
              isFetching: false,
              error: ''
          };
      case FETCH_CAT_FAIL:
          return{
              ...state,
              error: action.payload
          };
      default:
          return state;
  }
}