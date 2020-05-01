import React, { useState, useEffect } from 'react';
import { connnect } from 'react-redux';
import { getCat } from '../actions/action';

const CAtList = props => {
  const [newSearch, setNewSearch] = useState("Ragdoll");

  useEffect(() => {
      props.getCat("Ragdoll")
    }, []);

  const searchCats = e => {
      e.preventDefault()
      console.log("searchCats is running", newSearch.toLowerCase())
      props.fetchCats(newSearch.toLowerCase());
  }
​
  const handleChange = e => {
      setNewSearch(e.target.value)
      console.log(newSearch);
    }
​
  function capitalize(s)
  {
      return s[0].toUpperCase() + s.slice(1);
  }
​
  return (
      <div>
      <form className="cat-search" onSubmit={e => searchCats(e)}>
          <label>
          Cat Search!!!  
          <input 
              type="text"
              placeholder="New Todo"
              onChange={handleChange}
          />
          <button type='submit'>Submit</button>
          </label>
      </form>
      {props.cats.map(cat =>{
          return <div className="cat-card">
                      <h3>This is {capitalize(props.title)} #{props.cats.indexOf(cat) + 1}</h3>
                      <img src={cat}></img>
                  </div>
​
​
      })}
      </div>
  )
​
​
}
​
const mapPropsToState = state => {
  return {
    cats: state.cats,
    error: state.error,
    fetchingCats: state.fetchingCats,
    title: state.title
  }
}
​
export default connect(mapPropsToState, {getCat})(Cats);