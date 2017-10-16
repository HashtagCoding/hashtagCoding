import { combineReducers } from 'redux'
import todos from './todos.jsx'
import visibilityFilter from './visibilityFilter.jsx'
import contentful from './contentful'
import craigslist from './craigslist'
import instagram from './instagram'
import twitter from './twitter'
// import { routerReducer } from 'react-router-redux'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  contentful,
  craigslist,
  instagram,
  twitter
  // routing: routerReducer
})

export default todoApp
